// Business (or back-end) logic:


// Everything below this line is user interface (or front-end) logic:


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
