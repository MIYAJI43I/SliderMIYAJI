const slider = document.querySelector(".slider");
const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".btn");
const slideIcons = document.querySelectorAll(".navicon");
const numberOfslides = slides.length;
var slideNumber = 0;
let currentslide = 1;



//image slider next button
nextbtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfslides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevbtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = numberOfslides - 1;
        }
        
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
       playSlider = setInterval(function() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfslides - 1)) {
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
       }, 4000);
    }
    repeater();

    //stop the image slider autoplay on mouseover 
    slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
        repeater();
    });


    // javascript for image slider mamual navicon
    var manualNav = function(mamual){
        slides.forEach((slide) => {
            slide.classList.remove("active");

            btns.forEach((btn) => {
                btn.classList.remove("active");
            });
        });
        slides[mamual].classList.add("active");
        btns[mamual].classList.add("active");
    }
    
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentslide = i;
        });
    });

    // Javascript for image slider mamual navicon
    var manualNav = function(mamual){
    slides.forEach((slide) => {
        slide.classList.remove("active");

        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
    });
    slides[mamual].classList.add("active");
    btns[mamual].classList.add("active");
}

    btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentslide = i;
    });
});
