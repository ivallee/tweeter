$(document).ready(function() {

  $(".tweetArea").on("keyup", function(event) {
    const charLength = $(this).val().length;
    const maxCount = parseInt($(".counter").text());
    console.log(charLength, maxCount - charLength);
    // console.log($(this).find(".counter"));


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
