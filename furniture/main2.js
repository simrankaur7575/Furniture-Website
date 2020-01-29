

function MouseRollover(MyImage) {
        MyImage.src = "location_O.png";
    }
        function MouseOut(MyImage) {
        MyImage.src = "location_B.png";
    }

function MouseRollover1(MyImage) {
        MyImage.src = "o_bed2.png";
    }
        function MouseOut1(MyImage) {
        MyImage.src = "b_bed.png";
    }

function MouseRollover2(MyImage) {
        MyImage.src = "o_sofa2.png";
    }
        function MouseOut2(MyImage) {
        MyImage.src = "b_sofa.png";
    }
function MouseRollover3(MyImage) {
        MyImage.src = "o_chair2.png";
    }
        function MouseOut3(MyImage) {
        MyImage.src = "b_chair2.png";
    }
function MouseRollover4(MyImage) {
        MyImage.src = "o_cupboard2.png";
    }
        function MouseOut4(MyImage) {
        MyImage.src = "b_cupboard.png";
    }
function MouseRollover5(MyImage) {
        MyImage.src = "o_studytable2.png";
    }
        function MouseOut5(MyImage) {
        MyImage.src = "b_studytable.png";
    }
function MouseRollover6(MyImage) {
        MyImage.src = "o_mattess2.png";
    }
        function MouseOut6(MyImage) {
        MyImage.src = "b_mattress.png";
    }
function MouseRollover7(MyImage) {
        MyImage.src = "o_dinningtable2.png";
    }
        function MouseOut7(MyImage) {
        MyImage.src = "b_diningtable.png";
    }
function MouseRollover8(MyImage) {
        MyImage.src = "o_dress.png";
    }
        function MouseOut8(MyImage) {
        MyImage.src = "b_dress.png";
    }
function MouseRollover9(MyImage) {
        MyImage.src = "o_shoe2.png";
    }
        function MouseOut9(MyImage) {
        MyImage.src = "b_shoe2.png";
    }

function MouseRollover10(MyImage) {
        MyImage.src = "o_tv2.png";
    }
        function MouseOut10(MyImage) {
        MyImage.src = "b_tv2.png";
    }

function MouseRollover11(MyImage) {
        MyImage.src = "o_table2.png";
    }
        function MouseOut11(MyImage) {
        MyImage.src = "b_table2.png";
    }

function MouseRollover12(MyImage) {
        MyImage.src = "o_storage2.png";
    }
        function MouseOut12(MyImage) {
        MyImage.src = "b_storage.png";
    }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

