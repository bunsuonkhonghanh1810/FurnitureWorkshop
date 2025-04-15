let standoutProducts = [
    {
        id: 'SP01',
        room: 'bedroom',
        name: 'Giường châu âu',
        description: 'Size lớn, trắng sữa',
        price: 8999000,
        image: '../assets/img/san-pham-noi-bat/sp-1.jpg'
    },
    {
        id: 'SP02',
        room: 'office',
        name: 'Bàn làm việc',
        description: 'Size vừa, trắng nâu',
        price: 3999000,
        image: '../assets/img/san-pham-noi-bat/sp-2.jpg'
    },
    {
        id: 'SP04',
        room: 'bedroom',
        name: 'Tủ quần áo',
        description: '4 ngăn, trắng gỗ',
        price: 12999000,
        image: '../assets/img/san-pham-noi-bat/sp-3.jpg'
    },
    {
        id: 'SP04',
        name: 'Kệ để đồ',
        description: '4 ngăn, trắng gỗ',
        price: 2499000,
        image: '../assets/img/san-pham-noi-bat/sp-4.jpg'
    },
    {
        id: 'SP02',
        room: 'bedroom',
        name: 'Giường gỗ',
        description: 'Size vừa, nâu vân gỗ',
        price: 3999000,
        image: '../assets/img/san-pham-noi-bat/giuong-ngu.png'
    },
    {
        id: 'SP03',
        room: 'bedroom',
        name: 'Kệ đầu giường',
        description: '2 ngăn, gỗ lim',
        price: 12999000,
        image: '../assets/img/san-pham-noi-bat/ke-dau-giuong.png'
    },
    {
        id: 'SP01',
        room: 'livingRoom',
        name: 'Bàn uống nước',
        description: 'Size vừa, nâu đậm',
        price: 8999000,
        image: '../assets/img/san-pham-noi-bat/phong-khach-ban-uong-nuoc-2.png'
    },
    {
        id: 'SP02',
        room: 'livingRoom',
        name: 'Bàn uống nước 2',
        description: 'Size vừa, nâu vân gỗ',
        price: 3999000,
        image: '../assets/img/san-pham-noi-bat/phong-khach-ban-uong-nuoc.png'
    },
    {
        id: 'SP03',
        room: 'livingRoom',
        name: 'Kệ tv',
        description: '4 ngăn, gỗ lim',
        price: 12999000,
        image: '../assets/img/san-pham-noi-bat/phong-khach-ke-ti-vi.png'
    }
]

$.fn.renderStandoutProduct = function() {
    let product = `
        <div data-id='${this[0].id}' data-room='${this[0].room}' class="product-box">
            <div class="product-image">
                <img src="${this[0].image}" alt="">
            </div>
            <div class="product-title d-flex flex-column align-items-center">
                <a href="#">
                    <h4 class="text-uppercase">${this[0].name}</h4>
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
                <p>(${this[0].description})</p>
                <p>${this[0].price.toLocaleString('vi-VN')} VNĐ</p>
            </div>
        </div>`;

    $("#list-product").append(product);
}

$.fn.renderListStandoutProducts = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).renderStandoutProduct();
    }
}

$(standoutProducts).renderListStandoutProducts();

$('#list-product').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    useCSS: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><</button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
                slidesToShow: 3
          }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
    ]
});

$('.fa-bars').click(function() {
    if (!$('.header-nav').hasClass('active')) {
        $('.header-nav').addClass('active');
    }else {
        $('.header-nav').removeClass('active')
    }
})

function initSlickIfMobile() {
    if (window.innerWidth <= 576) {
        if (!$('.partners-logo').hasClass('slick-initialized')) {
            $('.partners-logo').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false
            });
        }
    }else {
        if ($('.partners-logo').hasClass('slick-initialized')) {
            $('.partners-logo').slick('unslick');
        }
    }
  }
  
$(document).ready(function () {
    initSlickIfMobile();
    $(window).on('resize', function () {
        initSlickIfMobile();
    });
});
  

$('.header-logo img') .click(function() {
    window.location.href = "index.html"
})

$('.banner-content button').click(function() {
    window.location.href = "contact.html"
})

$('.catalogue-box').click(function() {
    localStorage.setItem('chose', $(this).attr('data-room'));
    window.location.href = "allProducts.html"
})

$('.product-box').click(function() {
    localStorage.setItem('chose', $(this).attr('data-room'));
    localStorage.setItem('chosenProduct', $(this).attr('data-id'));
    window.location.href = "chosenProduct.html"
})

$('.news-bottom-right-forth').click(function() {
    window.location.href = "news.html"
})