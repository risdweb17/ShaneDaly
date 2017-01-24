$(document).ready(function() {
    $('button').click(function() {
      $('div').fadeToggle('fast', function(){
      		$('button').text("Show this thing")
      });
    });
})