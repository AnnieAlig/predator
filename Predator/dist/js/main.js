var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e);var s=document.getElementById("prev"),l=document.getElementById("next");1===slideIndex?(s.classList.add("hidden"),s.classList.remove("slider_control--1"),s.classList.remove("slider_control--2_prev"),l.classList.add("slider_control--2_next"),l.classList.remove("slider_control--3"),l.classList.remove("hidden")):2===slideIndex?(s.classList.remove("hidden"),s.classList.remove("slider_control--2_prev"),s.classList.add("slider_control--1"),l.classList.remove("slider_control--2_next"),l.classList.remove("hidden"),l.classList.add("slider_control--3")):3===slideIndex&&(s.classList.remove("hidden"),s.classList.remove("slider_control--1"),s.classList.add("slider_control--2_prev"),l.classList.remove("slider_control--2_next"),l.classList.remove("slider_control--3"),l.classList.add("hidden"))}function showSlides(e){var s,l=document.getElementsByClassName("slider__item");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";l[slideIndex-1].style.display="block"}showSlides(slideIndex);var form=document.getElementById("register_form"),inputs=document.getElementsByClassName("form__input");for(i=0;i<inputs.length;i++){var input=inputs[i];input.oninput=function(){this.value&&""!==this.value?this.classList.add("filled"):this.classList.remove("filled")}}