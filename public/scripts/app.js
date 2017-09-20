/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  function createTweetElement(data) {

    function createLink() {
      return $("<a>").attr("href", "#");
    }

    const $tweet = $("<article>").addClass("tweet");

    // Constructs header
    const header = $("<header>").addClass("tweet-header");
    const avatar = createLink().append($("<img>").addClass("avatar").attr("src", data.user.avatars.small));
    const tweeterUsername = $("<h4>").addClass("tweeter-username").text(data.user.name);
    const tweeterHandle = createLink().addClass("tweeter-handle").text(data.user.handle);

    header.append(avatar).append(tweeterUsername).append(tweeterHandle);

    // Contructs tweet content
    const tweetContent = $("<p>").addClass("tweet-content").text(data.content.text);

    // Constructs tweet footer
    const footer = $("<footer>").addClass("tweet-footer");
    const timestamp = $("<small>").addClass("timestamp").text(data.created_at);
    const tweetButtons = $("<div>").addClass("tweet-buttons");

    // Retweet button
    const retweetButton = createLink().append($("<span>").addClass("fa fa-retweet"));

    // Report button
    const reportButton = createLink().append($("<span>").addClass("fa fa-flag-checkered"));

    // Like button
    const likeButton = createLink().append($("<span>").addClass("fa fa-heart"));

    tweetButtons.append(retweetButton).append(reportButton).append(likeButton);
    footer.append(timestamp).append(tweetButtons);

    // Puts it all together!
    $tweet.append(header).append(tweetContent).append(footer)

   return $tweet;
  }

  function renderTweets(tweets) {
    $('.tweets-container').empty();
    for (let i = 0; i < tweets.length; i++) {
      $('.tweets-container').append(createTweetElement(tweets[i]));
    }
  }

  function loadTweets() {
     $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: function(data) {
        renderTweets(data);
      },
    });
  }

  loadTweets();

  // POSTs new tweet
  $("form").on("submit", function( event ) {
    event.preventDefault();

    // Creates errors for invalid tweets

    function tweetError(errText) {
      $("#submit-tweet").append($('<div></div>')
        .addClass("tweet-error")
        .text(errText)
        .fadeIn(500)
        .fadeOut(2500));
    }

    const chars = $(this).find("textarea");
    if (chars.val() === '' || /^\s+$/i.test(chars.val()) || chars.val() === null) {
      tweetError("You must enter some text to tw(eat)");
    } else if (chars.val().length >= 140) {
      tweetError("Your tw(eat) is too long");
    } else {
        $.post("/tweets", $(this).serialize(), function(data) {
          loadTweets();
          chars.val('')
          $(".counter").text(140);
        });
      }
  });

  $("#compose-button").on("click", function(event) {
    $(".new-tweet").slideToggle();
    $(".tweet-area").focus();
  });

});

