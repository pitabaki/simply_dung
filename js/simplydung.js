/*
JavaScript for SimplyDung

************************************
Developed by: Peter Berki
GitHub: PitaBaki // http://www.github.com/pitabaki
Personal: http://www.peterberkidesign.com
************************************

To be used in harmony with Bootstrap 3 and jQuery v2.1.4 (the library utilized by Bootstrap3)
*/
function init(){
	//To reduce sloppy coding, I've implemented 'use strict'
	'use strict';

	//data attribute values are stored here in the form off an array
	//if data attributes change in value, modify the array to reflect those changes
	//A query function was withheld. Quering the values of the data can speed up coding, but might slow down function
	var classNames=["marketing","typography","data_visualization","motion","illustration"];

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
		event.preventDefault();
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
}
window.onload = init;