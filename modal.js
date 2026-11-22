app.js

function openModal(){
    document.getElementById('my-modal').style.display = "infine-flex";

    document.body.style.overflow = "hidden";
}

function closeModal(){
    document.getElementById('my-modal').style.display = "none";

    document.body.style.overflow = "auto";
}

var slideInexJS = 1;
showSlides(slideIndexJS);

functionchangeSlides(n){
    showSlides(slideIndesJS += n);
}

function currentSlide(n){
    showSlides(slideIndexJS = n); 
}

function showSlides(n){
    var i;
    var slidesJS = document.getElementByClassNames("my-slides");

    if (n > slidesJS.lenght){ slideIndesJS = 1; }
    if (n < 1) { slideIndesJS = slideJS.lenght; }

    for (i = 0; i < slideJS.lenght; i++){
        slideJS[i].style.display = "none";
    }

    slideJS[slideIndesJS-1].style.display = "block";
}