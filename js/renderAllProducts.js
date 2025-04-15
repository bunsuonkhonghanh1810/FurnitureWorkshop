let pages = {
    quantity: 8,
    page: 1,
    pageQuantity: 0,
    indexMin: 0,
    indexMax: 0,
}

let productList = products[localStorage.getItem('chose')];

function renderProduct(product) {
    let productBox = `
        <div class="product-box ${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-title d-flex flex-column align-items-center">
                <a href="#">
                    <h4 class="text-uppercase">${product.name}</h4>
                </a>
                <p>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-star" style="color: #bd945f;"></i>
                    </span>
                </p>
                <p>(${product.description})</p>
                <p>${product.price.toLocaleString('vi-VN')} VNĐ</p>
            </div>
        </div>`;

    $('.products-container > .products-container-1 > div').append(productBox);
}

function renderPages() {
    pages.pageQuantity = Math.ceil(productList.length / pages.quantity);

    $('nav > ul').empty();

    $('nav > ul').append(`
        <li class="backward">
            <a><</a>
        </li>
    `)

    for (let i = 1; i <= pages.pageQuantity; i++) {
        $('nav > ul').append(`
            <li>
                <a>${i}</a>
            </li>
        `)
    }

    $('nav > ul').append(`
        <li class="forward">
            <a>></a>
        </li>
    `)

    if (pages.page == 1) $('.backward').remove();
    else if (pages.page == pages.pageQuantity) $('.forward').remove();

    changePages()

    $(document).ready(function() {
        $('.products-container-1 li').click(function() {
            if ($(this).hasClass('backward')) pages.page--;
            else if ($(this).hasClass('forward')) pages.page++;
            else pages.page = parseInt($(this).text());
    
            renderPages();
            changePages();
        })

        $('.product-box').click(function() {
            let chosenProduct = $(this).attr('class').split(' ')[1];
            localStorage.setItem('chosenProduct', chosenProduct)
            window.location.href = "chosenProduct.html"
        })
    })
}

function changePages() {
    pages.indexMin = pages.quantity * (pages.page - 1);
    pages.indexMax = productList.length < pages.quantity * pages.page ? productList.length - 1 : pages.indexMin + (pages.quantity - 1);

    renderPagesList();
}

function renderPagesList() {
    $('.products-container-2').empty();

    for (let i = pages.indexMin; i <= pages.indexMax; i++) {
        renderProduct(productList[i]);
    }
}

renderPages(productList);

function updateListWithPrice(priceRange) {
    productList = products[localStorage.getItem('chose')];
    if (priceRange == 'all') {}
    else if (priceRange == '15') productList = productList.filter(o => o.price > 15000000);
    else {
        let priceMinMax = priceRange.split('-to-').map(Number);
        productList = productList.filter(o => o.price <= priceMinMax[1] * 1000000 && o.price > priceMinMax[0] * 1000000)
    }

    renderPages(productList);
}

function arrangeList(state) {
    if (state == 'high-to-low') productList.sort((a, b) => b.price - a.price);
    else productList.sort((a, b) => a.price - b.price);

    renderPages(productList);
}

$('.price').click(function() {
    updateListWithPrice($(this).attr('class').split(' ')[1])
})

$('.arrange').click(function() {
    arrangeList($(this).attr('class').split(' ')[1])
})

$('.products-container-1 > p:nth-child(1)').append(translatedRooms[localStorage.getItem('chose')]);

