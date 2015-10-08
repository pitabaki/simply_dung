//Bootstrap JS and Element Manipulation
//Vanilla JS follows. JQuery has only been instated within Bootstraps JS.

//Define Global Variables
var progressWidth = document.getElementById("testProgress");
var progressText = document.getElementById("testText");
var numbers = 0;
for(var i = 0; i < 10000; i++){
	numbers++;
	}
numbers /= 100;

// Test to see if jQuery is working
// var somethingReturned = $('#anata');
// somethingReturned.text("something...SOMETHING!!");

//Function mess which changes the bar's progression percentage and fill amount
function mess(){

	//Define percentage variable
	var mathStuff = Math.random(0,1);

	//convert to a percentage (1-100%)
	mathStuff *= 100;

	//Numbers test

	console.log(numbers);
	//rounds percentage so there are no long percentages (e.g. 97.34923858)
	var finalPercentage = Math.round(mathStuff);

	//manipulate style width of percentage
	progressWidth.style.width = finalPercentage + "%";

	//Because Vanilla, the following updates the text for both older version of IE and modern browsers
	if(progressText.textContent !== undefined){
	  progressText.textContent = finalPercentage + "% complete";
	}else{
	  progressText.innerText = finalPercentage + "% complete";
	}//End If/Else
}//End Mess

//Event that's triggered
window.onload = mess;
