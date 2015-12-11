$(document).ready(function() {

	$('#tweet-controls').addClass('hidden');
	
	$('.tweet-compose').click(function() {
		
		$(this).css('height', '200%');
		$('#tweet-controls').removeClass('hidden');
		var maxLength = 140;
		$(this).keyup(function() {
			var tweetLength = maxLength - $('.tweet-compose').val().length;
			$('#char-count span').text(tweetLength);
			
		});
	});
	








})