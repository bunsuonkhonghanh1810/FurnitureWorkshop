function renderProduct(product, room) {
    let productBox = `
        <div class="product-box">
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

    $(`.products-big-box.${room} > div > div`).append(productBox);
}

function renderProductContainer(products) {
    let rooms = Object.keys(products);

    for (let i = 0; i < rooms.length; i++) {
        let productBigBox = `
            <div class="products-big-box ${rooms[i]}">
                <div>
                    <p>${translatedRooms[rooms[i]]}</p>
                    <button class="${rooms[i]}">xem tất cả</button>
                    <div class="d-flex"></div>
                </div>
            </div>
        `
        $('.products-container').append(productBigBox);

        for (let j = 0; j < 4; j++) {
            renderProduct(products[rooms[i]][j], rooms[i]);
        }
    }
}

renderProductContainer(products);

$(document).ready(function() {
    $('.products-big-box > div > button').click(function() {
        let chose = $(this).attr('class').split(' ')[0];
        console.log(chose);
        localStorage.setItem('chose', chose);
    })
})