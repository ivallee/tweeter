// Counts tweet characters and updates available characters.
$(document).ready(function() {
  $(".new-tweet-field").on("input", function(event) {
    const counter = $(event.target).parent().find(".counter");
    const tweetLength = $(event.target).val().length;
    const maxCount = 140;
    counter.text(maxCount - tweetLength);
    if (tweetLength > maxCount) {
      counter.addClass("counter-over");
    } else {
      counter.removeClass("counter-over");
    }
  });
});