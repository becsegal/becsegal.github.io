$(function() {
  console.log("JavaScript is working on this site! Cool!");


  //-----------------------------------------------------------------------------------
  // convertToRomanNumeral function takes number as a parameter 
  // and returns a Roman numeral
  // 
  // 100 | C 
  // 90  | XC
  // 50  | L
  // 40  | XL
  // 10  | X
  // 9   | IX
  // 5   | V
  // 4   | IV
  // 1   | I


  function convertToRomanNumeral(number) {
    var output = "";
    while (number > 0) {
      console.log("Number = " + number);
      // Get the next Roman numeral and append it to the output
      if (number >= 100) {
        output = output.concat("C");
        number = number - 100;
      }
      else if (number >= 90) {
        output = output.concat("CX");
        number = number - 90;
      }
      else if (number >= 50) {
        output = output.concat("L");
        number = number - 50;
      }
      else if (number >= 40) {
        output = output.concat("XL");
        number = number - 40;
      }
      else if (number >= 10) {
        output = output.concat("X");
        number = number - 10;
      }
      else if (number >= 9) {
        output = output.concat("IX");
        number = number - 9;
      }
      else if (number >= 5) {
        output = output.concat("V");
        number = number - 5;
      }
      else if (number >= 4) {
        output = output.concat("IV");
        number = number - 4;
      }
      else if (number >= 1) {
        output = output.concat("I");
        number = number - 1;
      }
    }
    return output;
  }



  //-----------------------------------------------------------------------------------
  // Convert the number input when the button is clicked

  var $button = $("button");
  var $numberInput = $("#number_input");
  var $romanNumeralOutput = $("#roman_numeral_output");

  $button.on("click", function(e){
    e.preventDefault();
    numberVal = $numberInput.val();
    romanNumeralVal = convertToRomanNumeral(numberVal);
    console.log("Roman numeral = " + romanNumeralVal);
    $romanNumeralOutput.val(romanNumeralVal);
  });

});
