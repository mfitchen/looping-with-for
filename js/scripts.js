// Business (or back-end) logic:


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

//var vowelsArray = ["a", "e", "i", "o", "u"]
  var puzzleString = "You miss 100% of the shots you don't take. Wayne Gretzky";
  var newPuzzleArray = puzzleString.split("");

  for (var index = 0; index < newPuzzleArray.length; index += 1) {
    if (newPuzzleArray[index] === "a" || newPuzzleArray[index] === "e" || newPuzzleArray[index] === "i" || newPuzzleArray[index] === "o" || newPuzzleArray[index] === "u") {
      newPuzzleArray[index] = "-"
    };
  };
  console.log(newPuzzleArray);

  var newPuzzleString = newPuzzleArray.join("");
  $(".puzzle-text").text(newPuzzleString);
  $("#puzzle-guess").show();

  $("button.btn").click(function() {
    $(".quote").text(puzzleString);
    $("#puzzle-output").show();
  });

// alert(newPuzzleString);
// display#puzzle-guess
//
// display#puzzle-output

  // event.preventDefault();
});

//newPuzzleString = puzzleString.replace(vowelsArray[index], "-");
