var crypt = function(value){
    var result = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var letter of value){
        var index = alphabet.indexOf(letter);
        result += index + ".";  
    }
    return result;
}

var decrypt = function(stringToDecrypt){
    var result = "";
    stringToDecrypt = stringToDecrypt.split(".");
    stringToDecrypt.pop();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0; i<=alphabet.length; i++){
        for(var letter of alphabet){
            var index = alphabet.indexOf(letter);
            if(stringToDecrypt[i] == index){
                letter = alphabet.charAt(index);
                result += letter;
            }
        }
    }
    return result;
}
console.log(crypt("giuseppe"));
var numbersToString = decrypt(crypt("cisonoriuscitocazzo"));
console.log(numbersToString);
