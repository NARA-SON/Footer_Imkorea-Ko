$(document).ready(function () { 

    // 패밀리사이트
    $(".family").click(function() {
        $(".family ul").toggleClass("on");
        $(".icon").toggleClass("rotate");
      });
    
    // 슬라이드
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        spaceBetween: 10,
        slidesPerView : 2.5,
        breakpoints: {
            402: {
                slidesPerView: 2.5,  //브라우저가 768보다 클 때
              },
            768: {
              slidesPerView: 4.5,  //브라우저가 768보다 클 때
            },
            1024: {
              slidesPerView: 5.5,  //브라우저가 1024보다 클 때
            },
          },
        centeredSlides: false,
        autoplay:{
            delay:2500,
            disableOnInteraction: false,
        },
        loop : false,
        loopAdditionalSlides : 1,
      });
      $(".swiper").hover(function(){
        swiper.autoplay.stop();
      }, function(){
        swiper.autoplay.start();
      });

  })