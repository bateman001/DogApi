// JavaScript Document
function getDogs(num){
	const options = {method: 'GET'}
	fetch(`https://dog.ceo/api/breeds/image/random/${num}`, options).then(response => response.json()).then(responseJson => displayDogs(responseJson)).catch(error => alert("Something went wrong"));
}

function displayDogs(responseJson){
	console.log(responseJson.message);
}

function watchForm(){
	$(".js-dogs").submit(e =>{
	
	e.preventDefault();
		
	number = $("#numberOfDogs").val();
	getDogs(number);
	});
}

$(function(){
	console.log("App has loaded!");
	watchForm();
});