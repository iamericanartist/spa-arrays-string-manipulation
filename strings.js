// console.log(">LOG1 >>>strings.js working<<<");

// multiple var can be defined with this shorthand (THANKS SWANN!)
var userInput = document.getElementById("yourInput"),
		submitButton = document.getElementById("stuffDoer"),
		domElement = document.getElementById("outputDomEl"),
		origTestString = "",		 //this is the original user input - assigned ON EVENT!
		reversedString = "",
		testString = "";		 //this is the CHECKED user input for USE IN FUNCTIONS

//CHECK FOR ENTER KEY USE rather than click
function ifEnterKey () {
	if (event.which === 13) {
		console.log(">User Hit ENTER");
		validateInput();
	}
}

//VALIDATE STRING IS TEXT ONLY
function validateInput () {
	origTestString = userInput.value;
	domElement.innerHTML = `${origTestString}  :Your Input`;
	var string = origTestString; //this is defined globally
	function hasNumber(string) {
	  return(/[\]\\_+-.,!?@#$%^&*():=;/|<>"'0-9]+/g.test(string));
	}
		if (!hasNumber(string)) { //BANG is saying "FALSE" + "FALSE" we'd get from an excluded character above, THUS = TRUE
	    console.log("Valid");
	    testString = origTestString; //overwriting our other global value for moving forward
	    console.log(">testString  : ", testString);
			document.getElementById("error").innerHTML = `Excellent phrase!`;
	    makeItSo ();
	} else {
	    console.log("Invalid -  No numbers or symbols");
			document.getElementById("error").innerHTML = `Invalid -  No numbers or symbols`;
	}
}

//REVERSAL FUNCTION
function reversal(abc) {
  reversedString = abc.split("").reverse().join("");  //"abc" is the argument we enter when we call the function
  console.log("~Reversed    : ", reversedString);
	domElement.innerHTML += `<hr/>${reversedString}  :Reversed!`;
  return reversedString;  // Return the new string (split then reversed then reassembled) for global use
}
//ALPHABITS FUNCTION
function alphabits(abc) {
  alphaBitsString = abc.split("").sort().join("");  //"abc" is the argument we enter when we call the function
  console.log("~Alphabetized: ", alphaBitsString);
	domElement.innerHTML += `<hr/>${alphaBitsString}  :Alphabetized!`;
  return alphaBitsString;  // Return the new string (split then sorted then reassembled) for global use
}
//PALINDROME FUNCTION
function palindrome(abc) {
	if (abc === reversedString) {
		console.log("~Palindrome!: ", reversedString);
		domElement.innerHTML += `<hr/>${reversedString} :PALINDROME!!`;

	} else {
		console.log("~Not palindrome: ", reversedString);
		domElement.innerHTML += `<hr/>${reversedString} :not palindrome...`;
	}
}

//RUN ALL INVOCATIONS
function makeItSo (){  
	reversal(testString); 			//invokes reversal
	alphabits(testString); 			//invokes alphabits
	palindrome(testString); 		//invokes palindrome
}

//EVENT LISTENERS (keyup and click)
userInput.addEventListener("keyup", ifEnterKey);
submitButton.addEventListener("click", validateInput)


//////////////The Following tells you your eventListener info//////////////
// document.addEventListener("keyup", function(event) {
//   console.log("The 'which' value is ",event.which); //WHICH key was pressed (the "which" value is returned)
//   // console.log("The whole shebang ",event); //The entire eventListener information is shared
// })
