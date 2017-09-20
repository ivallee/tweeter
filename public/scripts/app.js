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


  function renderTweets(tweets) {
    for (let i = 0; i < tweets.length; i++) {
      createTweetElement(tweets[i]);
      $('.tweets-container').append(createTweetElement(tweets[i]));
    }
  }

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
]


renderTweets(data);
});
