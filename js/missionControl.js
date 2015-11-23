/*************************************
//////////////////////////////////////

MISSION CONTROL DOT JS

Purpose:
Library of handlers to be paired with SimplyDung.com

Developed By:
Darth Berki
GitHub: PitaBaki // http://www.github.com/pitabaki
Personal: http://www.peterberkidesign.com

//////////////////////////////////////
*************************************/

var animating = {
		//Selects Id
		Id: function(id){
			"use strict";
			if(typeof id === "string"){
				return document.getElementById(id);
			}else{
				console.log("Id was not properly passed to animating.select().");
				return false;
			}
		},
		//Animates individual elements using marginLeft
		indLeft: function(id,position,opac,time){
			"use strict";
			//console.log("WORKING");
			var element = document.getElementById(id);
			setTimeout(function(){
				if((typeof id === "string") && (element !== null)){
					if((typeof position === "string") && (typeof opac === "string")){
						element.style.marginLeft = position;
						element.style.opacity = opac;
					}else if((typeof position === "string") && (position !== '') && (opac === '')){
						element.style.marginLeft = position;
					}else if((typeof opac === "string") && (opac !== '') && (position === '')){
						element.style.opacity = opac;
					}else{
						console.log("Error AnimateIn: only an id was passed.");
					}
				}else{
					return false;
				}
			}, time);
		},
		//Animates individual elements using marginTop
		indTop: function(id,position,opac,time){
			"use strict";
			//console.log("WORKING");
			var element = document.getElementById(id);
			setTimeout(function(){
				if((typeof id === "string") && (element !== null)){
					if((typeof position === "string") && (typeof opac === "string")){
						element.style.marginTop = position + "px";
						element.style.opacity = opac;
					}else if((typeof position === "string") && (position !== '') && (opac === '')){
						element.style.marginTop = position;
					}else if((typeof opac === "string") && (opac !== '') && (position === '')){
						element.style.opacity = opac;
					}else{
						console.log("Error AnimateIn: only an id was passed.");
					}
				}else{
					return false;
				}
			}, time);
		},
		//Animates groups of elements using opacity
		opac: function(id,opac,time){
			"use strict";
			//console.log("WORKING part 2");
			var grouping = document.getElementById(id);
			if((typeof id === "string") && (grouping !== null)){
				var grpChild = grouping.childNodes;
				setTimeout(function(){
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
		//Animates groups of elements using marginTop
		grpTop: function(id,position,classCheck,time){
			"use strict";
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
				setTimeout(function(){
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