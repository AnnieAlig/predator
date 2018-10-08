var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);

  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  if(slideIndex === 1) {
	prev.classList.add('hidden');
	prev.classList.remove('slider_control--1');
	prev.classList.remove('slider_control--2_prev');
	next.classList.add('slider_control--2_next');
	next.classList.remove('slider_control--3');
	next.classList.remove('hidden');
  } else if(slideIndex === 2) {
	prev.classList.remove('hidden');
	prev.classList.remove('slider_control--2_prev');
	prev.classList.add('slider_control--1');
	next.classList.remove('slider_control--2_next');
	next.classList.remove('hidden');
	next.classList.add('slider_control--3');
  } else if(slideIndex === 3) {
	prev.classList.remove('hidden');
	prev.classList.remove('slider_control--1');
	prev.classList.add('slider_control--2_prev');
	next.classList.remove('slider_control--2_next');
	next.classList.remove('slider_control--3');
	next.classList.add('hidden');
  }
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {
	  slideIndex = slides.length
	}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 


var form = document.getElementById("register_form");
var inputs = document.getElementsByClassName("form__input");

for(i = 0; i<inputs.length; i++){
	var input = inputs[i];
	input.oninput=function(){
		if(this.value && this.value !== ""){
			this.classList.add('filled');
		} else{
			this.classList.remove('filled');
		}
	}
}

