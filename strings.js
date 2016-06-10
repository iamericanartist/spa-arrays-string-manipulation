console.log(">LOG1 >>>strings.js working<<<");

// multiple var can be defined with this shorthand (THANKS SWANN!)
var userInput = document.getElementById("yourInput"),
		submitButton = document.getElementById("stuffDoer"),
		domElement = document.getElementById("outputDomEl"),
		reversedString = "",
		origTestString = "fdsa sdf rewq",		 //this is the original user input - assigned ON EVENT!
		testString = "asdffdsa";		 //this is the CLEANED UP user input for USE IN FUNCTIONS

console.log("> origTestString value:", origTestString); //writes our ORIGINAL input


function ifEnterKey () {
	if (event.which === 13) {
		console.log(">LOG5 User Hit ENTER");
		validateInput();
	}
}


function validateInput () {
	var string = origTestString; //this is defined globally
	function hasNumber(string) {
	  return(/[\]\\_+-.,!?@#$%^&*():=;/|<>"'0-9]+/g.test(string));
	}
		if (!hasNumber(string)) { //BANG is saying "FALSE" + "FALSE" we'd get from an excluded character above, THUS = TRUE
	    console.log("Valid");
	    testString = origTestString; //overwriting our other global value for moving forward
	    console.log(">testString value now: ", testString);
	} else {
	    console.log("Invalid -  No numbers or symbols");
	}
}




function reversal(abc) {
  reversedString = abc.split("").reverse().join("");  //"abc" is the argument we enter when we call the function
  console.log(">LOG6 reversedString", reversedString);
  console.log("Our Reversed Value is: ", reversedString);
  return reversedString;  // Return the new string (split then reversed then reassembled) for global use
}


// function alphabits() {

// }


function palindrome(abc) {
	if (abc === reversedString && !" ") {
		console.log("You got yourself a palindrome :", reversedString);
	} else {
		console.log("Not a palindrome :", reversedString);
	}
}


function makeItSo (testString){  //run ALL invocations at once
	reversal(testString); 			//invokes reversal
	// alphabits(testString); 	//invokes alphabits
	palindrome(testString); 		//invokes palindrome
}


userInput.addEventListener("keyup", ifEnterKey);
submitButton.addEventListener("click", validateInput)



// console.log(">LOG2 TEST Input:", testString); //writes our input
// console.log(">LOG3 TEST Reverse:", reversal(testString)); //writes reverse of input
// console.log(">LOG4",domElement);	
// console.log(">LOG7 reversedString GLOBAL USE",reversal(testString));

// var pattern = new RegExp(/[a-zA-Z]+/)

//////////////The Following tells you your eventListener info//////////////
// document.addEventListener("keyup", function(event) {
//   console.log("The 'which' value is ",event.which); //WHICH key was pressed (the "which" value is returned)
//   // console.log("The whole shebang ",event); //The entire eventListener information is shared
// })
