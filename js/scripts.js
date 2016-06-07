// Business (or back-end) logic:
// Everything below this line is user interface (or front-end) logic:

//Prime Sifting

$(document).ready(function(event) {
  $("ul#list-o-primes li").remove();

  var primeInput = parseInt($("input#input-prime").val());
  var primeList = [];

  for (var index = 2; index <= primeInput; index += 1) {
    primeList.push(index);
  };

  for (var prime = 2; prime <= primeInput / 2; prime += 1) {
    for (var index = 2 * prime; index <= primeInput; index += prime) {
      primeList[index-2] = "-";
    };
  };

  $("#div-prime").toggle();
  $("#output-primes").toggle();

  primeList.forEach(function(potentialPrime) {
    if (potentialPrime != "-") {
      $("#list-o-primes").append("<li>" + potentialPrime + "</li>");
    };
  });
  event.preventDefault();
});


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
