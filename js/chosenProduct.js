function renderInfo() {
    // let product = products[localStorage.getItem('chose')][parseInt(localStorage.getItem('chosenProduct').slice(2, localStorage.getItem('chosenProduct').length)) - 1];
    let product = products.livingRoom[0];

    // Product name
    $('.product-top-content .product-name').append(`${product.name}`);

    // Option
    $('.product-top-content .product-option').append(`
        <p>${product.option[0]}</p>
        <div class="option"></div>
        <div class="price">
            <p class="saleFrom">${product.saleFrom.toLocaleString('vi-VN')} VNĐ</p>
            <p class="salePrice">${product.price.toLocaleString('vi-VN')} VNĐ</p>
        </div>
        <div class="d-flex align-items-center justify-content-center warranty-container">
            <img class="warranty-img" src="../assets/img/CHITIETSANPHAM-Recovered.jpg" alt="">
            <p class="warranty-text">Bảo hành sản phẩm lên tới 36 tháng</p>
        </div>
    `)

    for (let i = 1; i < product.option.length; i++) $('.product-option .option').append(`<p>${product.option[i]}</p>`)

    // Picture
    let currentImg = 0;

    for (let i = 0; i < product.sliderImage.length; i++) {
        $('.product-top-content .smallImage').append(`<img data-img="${i}" src="${product.sliderImage[i]}" alt="">`)
        $('.product-top-content .bigImageSlider').append(`<img src="${product.sliderImage[i]}" alt="">`)
    }

    $('.product-top-content-center-left .fa-solid').click(function(){
        if ($(this).hasClass('fa-caret-left')) {
            if (currentImg == 0) currentImg = 3;
            else currentImg--;
        } else {
            if (currentImg == 3) currentImg = 0;
            else currentImg++;
        }

        if (window.innerWidth <= 992) {
            $('.product-top-content-center-left .bigImageSlider').css('transform', `translateX(${-currentImg*65}rem)`)
        }else {
            $('.product-top-content-center-left .bigImageSlider').css('transform', `translateX(${-currentImg*45.9375}rem)`)
        }
    })

    $('.smallImage > *').click(function() {
        currentImg = parseInt($(this).attr('data-img'))

        if (window.innerWidth <= 992) {
            $('.product-top-content-center-left .bigImageSlider').css('transform', `translateX(${-currentImg*65}rem)`)
        }else {
            $('.product-top-content-center-left .bigImageSlider').css('transform', `translateX(${-currentImg*45.9375}rem)`)
        }
    })

    // Infomation tabs
    let tabs = Object.keys(product).slice(8)
    
    for (let tab in tabs) {
        for (let text in product[tabs[tab]]) {
            $(`.nav-content-slider .${tabs[tab]}`).append(`<p>- ${product[tabs[tab]][text]}</p>`);
        }
    }
}

renderInfo();

let currentTab = 1;

$('.product-top-bottom-content-center li').click(function() {
    currentTab = parseInt($(this).attr('data-tab'));

    const position = (currentTab - 1) * (10.6875);
    $('.product-top-bottom-content-center > ul').css('--tab-position', `${position}rem`);

    if (window.innerWidth <= 992) {
        $('.nav-content-slider').css('transform', `translateX(${-(currentTab - 1)*65}rem)`)
    }else {
        $('.nav-content-slider').css('transform', `translateX(${-(currentTab - 1)*74}rem)`)
    }
}) 

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

    $('.product-bottom-content-center').append(productBox);
}

function renderPagesList() {
    for (let i = 0; i <= 3; i++) {
        renderProduct(products[localStorage.getItem('chose')][i]);
    }
}

renderPagesList()