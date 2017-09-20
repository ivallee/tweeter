// Counts tweet characters and updates available characters.
$(document).ready(function() {
  $(".tweet-area").on("input", function(event) {
    const counter = $(event.target).parent().find(".counter");
    const charLength = $(event.target).val().length;
    const maxCount = 140;
    counter.text(maxCount - charLength);
    if (charLength > maxCount) {
      counter.addClass("counter-over");
    } else {
      counter.removeClass("counter-over");
    }
  });
});