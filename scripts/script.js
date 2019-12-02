// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  var flip = 0;
  $( ".about-us" ).click(function() {
    $( ".table-one" ).slideToggle("slow");
  });
  $( ".started" ).click(function() {
    $( ".table-two" ).slideToggle("slow");
  });
  $( ".pictures" ).click(function() {
    $( ".table-three" ).slideToggle("slow");
  }); 


$('.drink-menu').click(function() {
  $('#drink-id').css('z-index', '1')
  $('#food-id').css('z-index', '-1')
});

$('.food-menu').click(function() {
  $('#food-id').css('z-index', '1')
  $('#drink-id').css('z-index', '-1')
});

// <img class="swapme" src="../SVG/sclogo.svg">  
// <script>
  // src="https://code.jquery.com/jquery-3.4.1.min.js"
  // integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  // crossorigin="anonymous"></script>
  // <script>
  	$('.swapme').mouseover(function(){
  		$('.swapme').attr('src', 'SVG/sclogo.svg')
  	})
  	$('.swapme').mouseout(function(){
  		$('.swapme').attr('src', 'SVG/ghlogo.svg')
  	})
  // </script>


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




// End of Your Code . Don't delete that line below!!
});