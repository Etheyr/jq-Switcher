var species = {

	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"

};

function main(){

	$(".button").click(function() {

		var buttonType=$(this).data("animal");

		var valeurType = species[buttonType];

		$("img").attr('src','img/' + valeurType);


	});	

}

$(document).ready(function(){

	main();
});