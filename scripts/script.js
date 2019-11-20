// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
<img class="swapme" src="../SVG/sclogo.svg">  
<script>
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script>
  	$('.swapme').mouseover(function(){
  		$('.swapme').attr('src', 'http://placekitten.com/400/300')
  	})
  	$('.swapme').mouseout(function(){
  		$('.swapme').attr('src', 'http://placekitten.com/400/600')
  	})
  </script>














// End of Your Code . Don't delete that line below!!
});