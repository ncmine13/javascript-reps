# Monday Homework

## Round 1:

var words = ["hello", "what", "is", "up", "dude"];


function lengths(words) {
	var lengthArray = [];
	for(i = 0; i < words.length; i++) {
		lengthArray.push(words[i].length);
    }
	return lengthArray
}
lengths(words)

//lengthArray: [5, 4, 2, 2, 4]


## Round 2

function transmogrifier(a, b, c) {
	var q = a*b;
	return(Math.pow(q, c));
}


transmogrifier(5, 4, 3)
//8,000
transmogrifier(13, 12, 5)
//92389579776
transmogrifier(42, 13, 7)
//14466001271480793000

## Round 3

function toonify(accent, sentence) {
	if(accent === "daffy") {
		var re = /s/gi;
		var newSentence = sentence.replace(re, "th");
		console.log(newSentence);
	} else if(accent === "elmer") {
		var re = /r/gi;
		var newSentence = sentence.replace(re, "w");
		console.log(newSentence);
	} else {
		console.log(sentence);
	}

}

//not done :(
## Round 4

var string;
var splitString = string.split(" ");
var newString;

function wordReverse(string) {
	for(i=0; i < newString.length; i++) {
		newString.push(splitString[i]);
	}
}

function wordReverse(string) {
	var string = "Why not listen to your heart";
	var splitString = string.split(" ");
	var newString = ""
	splitString.reverse();
	for(i=0; i < splitString.length; i++){
		newString = newString + splitString[i]
}
}




var splitString = string.split("")
var reversedString = string.split("").reverse()
var joinedString = string.split("").reverse().join();

Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry
about punctuation. You'll need to use `String.split()` to create an array of words (splitting them with a space or " ". Then you'll need to reverse the order of that array using `array.reverse()`. Finally, you'll loop through them to create a new string).



- References:
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">MDN: String.split()</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">MDN: Array.reverse()</a>

```javascript
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
```


## Round 5

function letterReverse(string){
	var newString = string.split("").reverse().join("")
	var secondSplit = newString.split(" ")
	var reverseString = secondSplit.reverse()
 	return reverseString.join(" ")
}
var string = "Why not listen to your heart";
letterReverse(string);
