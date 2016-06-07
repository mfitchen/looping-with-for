// Business (or back-end) logic:
// Everything below this line is user interface (or front-end) logic:

// Palindromes
$(document).ready(function() {
  $("button#palindromeButton").click(function(event) {
    var palindromeString = $("input#palindromeInput").val();
    var palindromeString = palindromeString.toUpperCase();
    var palindromeArray = palindromeString.split(" ");
    // var palindromeArray = palindromeString.split(" ", ".", ",", "!");
    var palindromeString = palindromeArray.join("");
    var palindromeArray = palindromeString.split("");
    console.log(palindromeArray);
    var palindromeArrayReversed = [];

    for (var index = (palindromeArray.length) - 1; index >= 0; index -= 1) {
      palindromeArrayReversed.push(palindromeArray[index]);
    };

    var palindromeTruth = true;

    for (var index = 0; index < palindromeArray.length; index += 1) {
      if (palindromeArray[index] != palindromeArrayReversed[index]) {
        var palindromeTruth = false;
      };
    };

    if (palindromeTruth === false) {
      $(".notPalindrome").text("not ");
    } else {
      $(".notPalindrome").text("");
    };

    $("#inputPalindrome").toggle();
    $("#outputPalindrome").toggle();
    event.preventDefault();
  });
});



// Factorial
$(document).ready(function() {
  $("button#factorialButton").click(function(event) {
    var factorialInput = $("input#factorialInput").val();
    var factorialParse = parseInt(factorialInput);
    var factorialParse = factorialParse.toFixed(0);
    var factorialTotal = 1;

    for (var factorial = factorialParse; factorial > 0; factorial--) {
    	factorialTotal *= factorial;
      //alert(total);
      //console.log(factorialTotal);
    };

    event.preventDefault();
    $(".factorial").text(factorialTotal);
    $("#factorialOutput").show();
  });
});
