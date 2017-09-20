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

    // Constructs header and children
    const header = $("<header>").addClass("tweet-header");
    const avatarLink = createLink();
    const tweeterUsername = $("<h4>").addClass("tweeter-username").text(data.user.name);
    const tweeterHandle = $("<a>").attr("href", "#").addClass("tweeter-handle").text(data.user.handle);

    // Contructs img inside link tag
    const img = $("<img>").addClass("avatar").attr("src", data.user.avatars.small);

    avatarLink.append(img);
    header.append(avatarLink).append(tweeterUsername).append(tweeterHandle);


    // Contructs tweet content
    const tweetContent = $("<p>").addClass("tweet-content").text(data.content.text);

    // Constructs tweet footer
    const footer = $("<footer>").addClass("tweet-footer");
    const timestamp = $("<small>").addClass("timestamp").text(data.created_at);
    const tweetButtons = $("<div>").addClass("tweet-buttons");

    // Retweet button
    const retweetLink = createLink();
    const retweetButton = $("<span>").addClass("fa fa-retweet");
    retweetLink.append(retweetButton);

    // Report button
    const reportLink = createLink();
    const reportLinkButton = $("<span>").addClass("fa fa-flag-checkered");
    reportLink.append(reportLinkButton);

    // Like button
    const likeLink = createLink();
    const likeLinkButton = $("<span>").addClass("fa fa-heart")
    likeLink.append(likeLinkButton);

    tweetButtons.append(retweetLink).append(reportLink).append(likeLink);
    footer.append(timestamp).append(tweetButtons);

    // Puts it all together!
    $tweet.append(header).append(tweetContent).append(footer)

   return $tweet;
  }


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet[0])
$('.tweets-container').append($tweet);
// to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
