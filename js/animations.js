$(document).ready(function() {
	var userName = $('#myName').text();
	var tweetID = 0;
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
			$('#tweet-controls').addClass('hidden');
		}

	});


	$('#tweet-submit').click(function() {
		if ($('.tweet-compose').val().length > 0) {
			var newTweet = $('.tweet-compose').val();
		}
		var retweetCounter = 0;
		var favoritesCounter = 0;
		$('#newPlaceHolder').after('<div class="tweet' + tweetID + '">\
			<div class="content">\
				<img class="avatar" src="img/paul.jpg" />\
				<strong class="fullname">' + userName + '</strong>\
				<span class="username">Me</span>\
				<p class="tweet-text">' + newTweet + '</p>\
				<div class="tweet-actions">\
					<ul>\
						<li><span class="icon action-reply"></span> Reply</li>\
						<li><span class="icon action-retweet"></span> Retweet</li>\
						<li><span class="icon action-favorite"></span> Favorite</li>\
						<li><span class="icon action-more"></span> More</li>\
					</ul>\
				</div>\
				<div class="stats">\
					<div class="retweets">\
						<p class="num-retweets">30</p>\
						<p>RETWEETS</p>\
					</div>\
				<div class="favorites">\
					<p class="num-favorites">6</p>\
					<p>FAVORITES</p>\
				</div>\
				<div class="users-interact">\
					<div>\
						<img src="img/paul.jpg" />\
						<img src="img/vklimenko.jpg" />\
					</div>\
				</div>\
				<div class="time">1:04 PM - 19 Sep 13</div>\
			</div>\
			<div class="reply">\
				<img class="avatar" src="img/paul.jpg" />\
				<textarea class="tweet-compose" placeholder="Reply to @mybff"/>\
				</textarea>\
			</div>\
		</div>\
		</div>');
		console.log(tweetID);
		tweetID++;
		
		$('.tweet-compose').val('');
		$('.tweet-compose').css('height', '2.5em');
		$('#tweet-controls').addClass('hidden');
		
	});
	
	$('.action-retweet').click(function() {



	});

	$('.action-favorite').click(function() {



	});

})


/*adsfjgadjgfjgadsjfgadgfakfhgakjhsdgfhagdhfgagfkagdkfjhgadskjfhgakjhsdgfkjhgadskjfhgakjdhgfkjahgdkfjhgajskdhfgakjdsgfkjahgsdfkjhagdfkjga*/