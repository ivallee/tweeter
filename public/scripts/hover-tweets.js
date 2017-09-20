
$(function() {
  const tweet = $(".tweet");
  const buttons = $(".tweetButtons");

  // Sets hidden/visible state for buttons
  buttons.hide();
  tweet.css("opacity", "0.7")
  $(".tweet").on("mouseenter", function () {
    buttons.show();
    tweet.css("opacity", "1")
  });
  $(".tweet").on("mouseleave", function () {
    buttons.hide();
    tweet.css("opacity", "0.7")
  });
});