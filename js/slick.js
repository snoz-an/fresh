$(document).ready(function(){
    //Используй для slick js лучше id
    $('#eating_plan_slider').slick({
      infinite: true,
      dots: false,
      slidesToShow: 3.3,

      slidesToScroll: 1,
      dotsClass: 'slick-dots slick-dots-partners',
      arrow: false,
      // centerMode: true,
      prevArrow: $('.eating_plan_slider-prev'),
      nextArrow: $('.eating_plan_slider-next'),
      responsive: [
        
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              
            }
          },
          
          {
            breakpoint: 573,
            settings: {
              slidesToShow: 2,
            }
          }
      ]
    });
    
    
   
});