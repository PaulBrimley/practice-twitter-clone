$(document).ready(function() {
	
	$('#tweet-controls').addClass('hidden');
	
	$('.tweet-compose').focus(function() {
		
		$(this).css('height', '4em');
		$('#tweet-controls').removeClass('hidden');
		var maxLength = 140;
		$(this).keyup(function() {
			var tweetLength = maxLength - $('.tweet-compose').val().length;
			$('#char-count span').text(tweetLength);
			if (tweetLength <= 10) {
				$('#char-count span').addClass('red');
			} else {
				$('#char-count span').removeClass('red');
			}

			if ($('.tweet-compose').val().length >= maxLength) {
				$("#tweet-submit").prop('disabled', true);
			} else if ($('.tweet-compose').val().length < maxLength) {
				$("#tweet-submit").prop('disabled', false);
			}
		});
	});

	$('.tweet-compose').blur(function() {
		if ($('.tweet-compose').val().length === 0) {
			$('.tweet-compose').css('height', '2.5em');
		}
	});
	
	








})


/*adsfjgadjgfjgadsjfgadgfakfhgakjhsdgfhagdhfgagfkagdkfjhgadskjfhgakjhsdgfkjhgadskjfhgakjdhgfkjahgdkfjhgajskdhfgakjdsgfkjahgsdfkjhagdfkjga*/