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

	//create a comparable piece of data (i.e. an array of the data-category data)
	for(var q = 0; q < classNames.length; q++){
		classQuery.push("[data-category=" + "'" + classNames[q] + "']");
	}

	//class that gets added when a button is selected. Class is added to images
	var activeClass = " active";

	var itemQuery = document.querySelectorAll("[data-category]");

	//What happens when a button is clicked follows
	$("button").click(function(){

		//active class needs to be removed first
		//removes the class "active" attached to images
		$("img").removeClass("active");

		//removes the class "active" attached to buttons
		$("button").removeClass("active");

		//When button is clicked, an ID is returned
		var id = this.id;
		var button = document.getElementById(id);
		button.className = activeClass;

		//The code silenced out is a reminder. If I decide to remove jQuery implementation, the following will remind me where I left off.
		/*
		var portfolio_section = document.getElementById("portfolio");
		var general_data = portfolio_section.getElementsByClassName("active");
		if(general_data.length > 0){
			for(var z = 0; z < general_data.length; z++){
				general_data[z].className -= "active";
				console.log(general_data.length);
			}
		}*/

		/*var remainCat = document.querySelectorAll(classQuery);
		console.log("remainCat length: " + remainCat.length);*/


/*
		//cycle through classNames
		//once a button is pressed, the id is sent through the following for-loop to find a match
		for(var i = 0; i < classNames.length;i++){



			//if the selected id matches one of the categories in the className array, then...
			if(id === classNames[i]){

				//so that the id is used as the category query, the following needs to be concatenated
				//create a variable to store concatenation
				var data_categories = "[data-category=" + "'" + id + "']";

				//search for that particular data attribute
				var selection = document.querySelectorAll(data_categories);

				for(var z = 0;z < remainCat.length; z++){
					if(remainCat[z] !== selection){

						remainCat[z].className += activeClass;
						//apply event to each match
						//in order to apply an event to each selection, another for-loop is constructed
						//this for-loop works off of how many returns were made from the query
						//for(var g = 0; g < empty; g++){
							//selection[g].className += activeClass;
							//console.log(selection[g]);
						//}
					}
				}
			}
		}*/




		//cycle through classNames
		//once a button is pressed, the id is crossreferenced with the classNames array
		for(var i = 0; i < classNames.length;i++){

			//for every category attribute that doesn't match the ID, the following happens
			if(id !== classNames[i]){

				//array idQuery (defined above) is updated with the list of attributes that didn't match the ID (button pushed)
				idQuery.push("[data-category=" + "'" + classNames[i] + "']");
			}
		}
 		var selection = [];
		//search for that particular data attribute
		for(var qr = 0; qr < itemQuery.length; qr++ ){
			selection.push(document.querySelectorAll(idQuery[qr]));
		}
		for(var t = 0; t < selection.length; t++){
			selection[t].className += activeClass;
		}
		console.log(selection.length);

	});
}
window.onload = init;