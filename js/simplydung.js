/*
JavaScript for SimplyDung

************************************
Developed by: Peter Berki
GitHub: PitaBaki // http://www.github.com/pitabaki
Personal: http://www.peterberkidesign.com
************************************

To be used in harmony with Bootstrap 3 and jQuery v2.1.4 (the library utilized by Bootstrap3)
*/

/*

Cocktail Alt Text Functions

*/

var cocktailAlt = "An infographic about alcoholic drinks";
var cocktail = "Do you know what you've been drinking? An infographic about your alcohol";

//Text swap function
function textStatement(statement){
	'use strict';
	var output = document.getElementById("cocktailStatement");
	if(output.textContent !== 'undefined'){
		output.textContent = statement;
	}else{
		output.innerText = statement;
	}
}

//define function to replace text within cocktail function
function cocktailReplacement(windowWidth){
	'use strict';
	//Ascertain width of window
	if(windowWidth <= 600){
		return textStatement(cocktailAlt);
	}else{
		return textStatement(cocktail);
	}
}

/*

End Cocktail Alt Text Functions

*/

function init(){
	//To reduce sloppy coding, I've implemented 'use strict'
	'use strict';

	/*

	Object for Animations

	*/

	var windowWidth = window.innerWidth;
	var animating = {
		animIndLeft: function(id,position,opac,time){
			//console.log("WORKING");
			var element = document.getElementById(id);
			setTimeout(function time(){
				if((typeof id === "string") && (element !== null)){
					if((typeof position === "string") && (typeof opac === "string")){
						element.style.marginLeft = position;
						element.style.opacity = opac;
					}else if((typeof position === "string") && (position !== '') && (opac === '')){
						element.style.marginLeft = position;
					}else if((typeof opac === "string") && (opac !== '') && (position === '')){
						element.style.opacity = opac;
					}else{
						alert("Error AnimateIn: only an id was passed.");
					}
				}else{
					return false;
				}
			}, time);
		},
		animIndTop: function(id,position,opac,time){
			//console.log("WORKING");
			var element = document.getElementById(id);
			setTimeout(function time(){
				if((typeof id === "string") && (element !== null)){
					if((typeof position === "string") && (typeof opac === "string")){
						element.style.marginTop = position + "px";
						element.style.opacity = opac;
					}else if((typeof position === "string") && (position !== '') && (opac === '')){
						element.style.marginTop = position;
					}else if((typeof opac === "string") && (opac !== '') && (position === '')){
						element.style.opacity = opac;
					}else{
						alert("Error AnimateIn: only an id was passed.");
					}
				}else{
					return false;
				}
			}, time);
		},
		animOpac: function(id,opac,time){
			//console.log("WORKING part 2");
			var grouping = document.getElementById(id);
			if((typeof id === "string") && (grouping !== null)){
				var grpChild = grouping.childNodes;
				setTimeout(function time(){
					for(var i = 0; i < grpChild.length; i++){
						if(typeof grpChild[i].innerHTML === "string"){
							grpChild[i].style.opacity = opac;
						}
					}
				},time);
			}else{
				return false;
			}
		},
		animGrpTop: function(id,position,classCheck,time){
			//console.log("WORKING part 2");
			var grouping = document.getElementById(id);
			function delay(element){
				setTimeout(function(){
					element.style.marginTop = position + "px";
					console.log("time");
				}, 400);
			}
			if((typeof id === "string") && (grouping !== null)){
				var grpChild = grouping.childNodes;
				console.log(grpChild);
				setTimeout(function time(){
					for(var i = 0; i < grpChild.length; i++){
						if(grpChild[i].className === classCheck){
							delay(grpChild[i]);
						}
					}
				},time);
			}else{
				return false;
			}
		}
	};

	/*

	End Object for Animations

	*/

	var animateID = ["hero","resume","passage"];

	/*
	
	Call all animations

	*/

	animating.animIndLeft("hero","0","1",750);
	animating.animIndTop("resume_button","180","1",750);
	animating.animIndTop("dung_logo_img","0","1",0);
	animating.animOpac("resume","1",1000);
	animating.animOpac("passage","1",1000);
	animating.animGrpTop("nav","0","jetpack",400);


	/*
	
	End Call all animations

	*/

	//data attribute values are stored here in the form off an array
	//if data attributes change in value, modify the array to reflect those changes
	//A query function was withheld. Quering the values of the data can speed up coding, but might slow down function
	var classNames=["typography","data_visualization","animation","illustration"];

	//empty array, to push classNames plus the concatenated formula below
	var classQuery = [];

	//empty array, to push classNames minus selected ID
	var idQuery = [];

	//class that gets added when a button is selected. Class is added to images
	var activeClass = " active";

	//Included only for testing purposes

	/* var itemQuery = document.querySelectorAll("[data-category='marketing']");
	console.log(itemQuery);
	console.log (itemQuery.length); */

	//What happens when a button is clicked follows
	$("button").click(function(){
		//event.preventDefault();
		//When button is clicked, an ID is returned
		var id = this.id;

		//query arrays and selection array need to be cleared when the button is clicked
		idQuery = [];
		classQuery = [];
		var selection = [];

		//active class needs to be removed first
		//removes the class "active" attached to images
		$("img").removeClass(activeClass);

		//removes the class "active" attached to buttons
		$("button").removeClass(activeClass);

		if(id !== "clear"){
			//button (id) is selected and the class (defined globally), "active", is attached to button
			var button = document.getElementById(id);
			button.className = activeClass;

			//i is less than class names so for loop will only loop through the amount of names in classNames
			//the reason is because we only need to log one data-category for identification purposes
			//idQuery stores data-category (data attribute)
			for(var i = 0; i < classNames.length; i++){
				if(id !== classNames[i]){
					idQuery.push("[data-category=" + "'" + classNames[i] + "']");
				}
			}

			//search for that particular data attribute and push he results into selection
			//this returns the html element
			for(var qr = 0; qr < idQuery.length; qr++ ){
				selection.push(document.querySelectorAll(idQuery[qr]));
			}
			//console.log(selection);

			//loop through returned data and attach an activeClass
			//start loop with the length of selection
			for(i = 0; i < selection.length; i++){
				//if(selection[i].length >= 0){

					//start a second loop to select each, individual img
					//without this second loop, the active class is attached to the general selection
					//example: if the dataset is marketing, activeClass would get attached to marketing as a whole
					//but we want each image in marking to have activeClass
					for(var g = 0; g < selection[i].length; g++){
						selection[i][g].className = activeClass;
					}
				//}
			}
			return false;
		}else{
			return false;
		}
	});
	$(window).resize(function(){
		setTimeout(function(){
			windowWidth = window.innerWidth;
			cocktailReplacement(windowWidth);
		},500);
	});
	//instate text replacement for cocktail ID
	cocktailReplacement(windowWidth);
}
window.onload = init;
