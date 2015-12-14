$(document).ready(function() {
	var tweetID = 400;
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var tweetArray = [{
		tweetID: 100,
		avatar: 'img/damleturks.jpg',
		fullName: 'My BFF',
		userName: '@mybff',
		tweetText: 'Today is an amazing day',
		numRetweets: 30,
		numFavorites: 6,
		timeStamp: '1:04 PM - 19 Sep 13'
	},
	{
		tweetID: 200,
		avatar: 'img/funwatercat.jpg',
		fullName: 'The Onion',
		userName: '@theonion',
		tweetText: '"I\'m able to speak confidently about a wide range of subjects, so it’s probably hard for most women to follow." http://onion.com/1aWfKwf' ,
		numRetweets: 30,
		numFavorites: 6,
		timeStamp: '1:04 PM - 19 Sep 13'
	},
	{
		tweetID: 300,
		avatar: 'img/jennyshen.jpg',
		fullName: 'Harvard Biz Review',
		userName: '@HarvardBiz',
		tweetText: 'It is possible to work with a loved one without ruining the relationship http://s.hbr.org/15FDIri',
		numRetweets: 30,
		numFavorites: 6,
		timeStamp: '1:04 PM - 19 Sep 13'
	}
	];

	function TweetConstructor(tweetID, tweetText, timeStamp) {
		this.retweets = '0';
		this.favorites = '0';
		this.tweetID = tweetID;
		this.avatar = 'img/paul.jpg';
		this.fullName = 'Paul Brimley';
		this.userName = 'Me';
		this.tweetText = tweetText;
		this.timeStamp = timeStamp;
	};

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
		var rightNow = new Date();
		var amPm = '';
		var hours =  0;
		var minutes = 0;
		if (rightNow.getHours() > 12) {
			hours = rightNow.getHours() - 12;
			amPm = 'PM';
		} else {
			hours = rightNow.getHours();
			amPm = 'AM';
		}
		if (rightNow.getMinutes() < 10) {
			minutes = '0' + rightNow.getMinutes().toString();
		} else {
			minutes = rightNow.getMinutes().toString();
		}

		var timeStamp = hours + ':' + minutes + ' ' + amPm + ' ' +  rightNow.getDate() + ' ' +  months[rightNow.getMonth()] + ' ' + (rightNow.getFullYear() % 1000);

		var newTweetObj = new TweetConstructor(tweetID, newTweet, timeStamp);
		tweetArray.push(newTweetObj);

		$('#newPlaceHolder').after('<div class="tweet' + newTweetObj.tweetID + '">\
			<div class="content">\
				<img class="avatar" src=' + newTweetObj.avatar + ' />\
				<strong class="fullname">' + newTweetObj.fullName + '</strong>\
				<span class="username">Me</span>\
				<p class="tweet-text">' + newTweetObj.tweetText + '</p>\
				<div class="tweet-actions">\
					<ul class="something' + newTweetObj.tweetID + ' hidden">\
						<li><span class="icon action-reply"></span> Reply</li>\
						<li class="retweeting' + newTweetObj.tweetID + '"><span class="icon action-retweet"></span> Retweet</li>\
						<li class="favoriting' + newTweetObj.tweetID + '"><span class="icon action-favorite"></span> Favorite</li>\
						<li><span class="icon action-more"></span> More</li>\
					</ul>\
				</div>\
				<div class="stats' + newTweetObj.tweetID + '">\
					<div class="retweets">\
						<p class="num-retweets' + newTweetObj.tweetID + '">0</p>\
						<p>RETWEETS</p>\
					</div>\
					<div class="favorites">\
						<p class="num-favorites' + newTweetObj.tweetID + '">0</p>\
						<p>FAVORITES</p>\
					</div>\
					<div class="users-interact">\
						<div>\
							<img src="img/paul.jpg" />\
							<img src="img/vklimenko.jpg" />\
						</div>\
					</div>\
					<div class="time">' + newTweetObj.timeStamp + '</div>\
				</div>\
				<div class="reply replying' + newTweetObj.tweetID + '">\
					<img class="avatar" src=' + newTweetObj.avatar + ' />\
					<textarea class="tweet-compose" placeholder="Reply to @mybff"/>\
					</textarea>\
				</div>\
			</div>\
		</div>');
		tweetID += 100;

		$('.stats' + newTweetObj.tweetID).slideUp(1);
		$('.replying' + newTweetObj.tweetID).slideUp(1);


		$('.retweeting' + newTweetObj.tweetID).click(function() {
			var tweetIncrement = Number($('.num-retweets' + newTweetObj.tweetID).text()) + 1;
			tweetIncrement = tweetIncrement.toString();
			$('.num-retweets' + newTweetObj.tweetID).text(tweetIncrement);
		});

		$('.favoriting' + newTweetObj.tweetID).click(function() {
			var favIncrement = Number($('.num-favorites' + newTweetObj.tweetID).text()) + 1;
			favIncrement = favIncrement.toString();
			$('.num-favorites' + newTweetObj.tweetID).text(favIncrement);
		});

		$('.tweet' + newTweetObj.tweetID).hover(function() {$('.something' + newTweetObj.tweetID).removeClass('hidden');},function() {$('.something' + newTweetObj.tweetID).addClass('hidden');
		});

		$('.tweet' + newTweetObj.tweetID).click(function() {
			$('.stats' + newTweetObj.tweetID).slideDown(600);
			$('.replying' + newTweetObj.tweetID).slideDown(600);
		});

		$('.tweet' + newTweetObj.tweetID).mouseleave(function() {
			$('.stats' + newTweetObj.tweetID).slideUp(600);
			$('.replying' + newTweetObj.tweetID).slideUp(600);
		});

		$('.tweet-compose').val('');
		$('.tweet-compose').css('height', '2.5em');
		$('#tweet-controls').addClass('hidden');
	});
	

	

	

})


/*adsfjgadjgfjgadsjfgadgfakfhgakjhsdgfhagdhfgagfkagdkfjhgadskjfhgakjhsdgfkjhgadskjfhgakjdhgfkjahgdkfjhgajskdhfgakjdsgfkjahgsdfkjhagdfkjga*/