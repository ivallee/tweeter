$(document).ready(() => {

  $(".tweetArea").on("keyup", () => {
    const charLength = $('.tweetArea')[0].value.length;
    const maxCount = parseInt($(".counter").text());
    console.log(charLength, maxCount - charLength);
    console.log($(".counter").text());
    console.log(this);

  });
});

  function countChars(chars) {
    let output = 0
    if (chars >= 140) {
      output = 140 - chars;
    } else {
      output = 140 - chars;
    }
    return output;
  };


console.log(countChars(150));