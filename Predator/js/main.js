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

var mute_btn = document.getElementById("video_mute");
var video = document.getElementById("intro_video");
mute_btn.onclick = function(){
	if(video.muted){
		this.classList.remove('muted');
		video.muted= false;
	} else{
		this.classList.add('muted');
		video.muted= true;
	}
}
video.addEventListener('ended',function() {
	var after = document.getElementById("video_after");
	after.style.display = "flex";
})


document.querySelector('#register_form').addEventListener('submit', function(e) {
	e.preventDefault();
	var data = new FormData(this); // create new FormData object
	data = data.entries();
	var obj = data.next(); // access Iterator
	var retrieved = {};
	while(undefined !== obj.value) {    
			retrieved[obj.value[0]] = obj.value[1];
			obj = data.next();
	}

	var XHR = new XMLHttpRequest();
	var urlEncodedData = "";
	var urlEncodedDataPairs = [];

	for(var name in retrieved) {
			urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(retrieved[name]));
	}
	urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

	XHR.addEventListener('load', function(event) {
			console.log('Data sent.');
			showSuccess();
	});
	XHR.addEventListener('error', function(event) {
			console.log('Oops! Something goes wrong.');
			showSuccess();
	});

	XHR.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSfoD6nANt7jFCBQVSQ17VMJiZ3Hr1XaJwrE312_k220Vg1UTw/formResponse');
	XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	XHR.send(urlEncodedData); // send the form
});

//https://docs.google.com/forms/d/e/1FAIpQLSf_YjNIlz13snHwyPsh_tiJuPvLGI_HFbWU02AuFLM0jSteig/formResponse

function showSuccess(){
	var success = document.querySelector('.form_success');
	success.style.display = "flex";
	setTimeout(function(){
		success.style.display = "none";
	}, 3000);
}