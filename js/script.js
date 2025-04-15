$('.header-logo img').click(function() {
    window.location.href = "index.html"
})

$('.fa-bars').click(function() {
    if (!$('.header-nav').hasClass('active')) {
        $('.header-nav').addClass('active');
    }else {
        $('.header-nav').removeClass('active')
    }
})

// function initSlickIfMobile() {
//     if (window.innerWidth <= 576) {
//         if (!$('.partners-content').hasClass('slick-initialized')) {
//             $('.partners-content').slick({
//                 infinite: true,
//                 autoplay: true,
//                 autoplaySpeed: 1000,
//                 arrows: false
//             });
//         }
//     }else {
//         if ($('.partners-content').hasClass('slick-initialized')) {
//             $('.partners-content').slick('unslick');
//         }
//     }
// }
  
// $(document).ready(function () {
//     initSlickIfMobile();
//     $(window).on('resize', function () {
//         initSlickIfMobile();
//     });
// });