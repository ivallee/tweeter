// Counts tweet characters and updates available characters.

$(document).ready(function() {

  $(".tweetArea").on("keyup", function(event) {
    const charLength = $(this).val().length;
    const maxCount = 140;
    $(this).parent().find(".counter").text(maxCount - charLength);
    if (charLength > maxCount) {
      $(this).parent().find(".counter").addClass("counterOver");
    } else {
      $(this).parent().find(".counter").removeClass("counterOver")
    }

  });
});

  // function countChars(chars) {
  //   let output = 0
  //   if (chars >= 140) {
  //     output = 140 - chars;
  //   } else {
  //     output = 140 - chars;
  //   }
  //   return output;
  // };
