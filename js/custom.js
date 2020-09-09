$(document).ready(function(){

//owl.carosel


$('.slider_section').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:3000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})





	});










