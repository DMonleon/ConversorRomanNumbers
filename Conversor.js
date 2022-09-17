function convertToRoman(num) {

    const numRom = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const numValor= [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var counter = num;
    var roman = [];
  
  for ( var i = numRom.length; i>=0; i--){
    if (counter >= numValor[i]){
      do {
        counter = counter - numValor[i];
        roman.push(numRom[i])
      } while (counter >=numValor[i])
    }
  }
     roman = roman.join("");
    
     return roman;
  }