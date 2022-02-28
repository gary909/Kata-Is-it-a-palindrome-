function isPalindrome(x) {
    var lowered = x.toLowerCase(); //lowercase
    var loweredREveresed = []; //empty array
    for (var i = 0; i < lowered.length; i++){
        loweredREveresed.push(lowered[i]) // split word into array
    }
    loweredREveresed = loweredREveresed.reverse().join(''); // reverse array, remove commas
    if (lowered == loweredREveresed){ //compare two words if identical
        return true;
    } else {
        return false
    };
}

console.log(isPalindrome("a")); // true
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("Abba")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Bob")); // true
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("AbBa")); // true
console.log(isPalindrome("")); // true