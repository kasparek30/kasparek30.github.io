
// Handles the smooth scrolling of the anchor links
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("calendar").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("calendar").style.display = "";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDywfhkPZX6fy77HBK5uv0t3bHVHW5-qVY",
  authDomain: "prospectsnationalteam.firebaseapp.com",
  databaseURL: "https://prospectsnationalteam.firebaseio.com",
  storageBucket: "prospectsnationalteam.appspot.com",
  messagingSenderId: "880000554288"
};
firebase.initializeApp(config);

// Handles the email subscribe info
var database = firebase.database();
var subscribe = document.getElementById('subscribe');

subscribe.addEventListener('click', function(e) {

  // Get email address
  var email = document.getElementById('email').value;

  // Create a storage ref
  var date = Date();
  var emailRef = firebase.database().ref().child('Email List/' + date);

    if (email === '') {
      alert('Please enter your email address!');
    } else if (emailRef.set(email)) {
      alert(email + ' has been added to our newsletter!');
      document.getElementById('email').value = '';
    } else {
      alert("An error has occured! You're email has NOT been added to our newsletter.");
    }
});

// Handles the submission of the become-a-prospect fields
function bapForm() {
  confirm('Please verify that the following information is correct before submitting!');
}


// Handles the show/hide 'back-to-top' button'
var amountScrolled = 250;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

// Handles the scrolling of the 'back-to-top' button
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.back-to-top").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: 0
      }, 800);
  });
});
