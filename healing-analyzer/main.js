var characterData;

function getCharacterData(){
	var characterRequest = new XMLHttpRequest();
	
	var characterName = document.getElementsByName("name")[0].value;
	var serverName = document.getElementsByName("server")[0].value;
	
	characterRequest.open("GET", "https://us.api.battle.net/wow/character/"+ serverName + "/" + characterName + "?fields=stats&locale=en_US&apikey=wx99z97834buae5egsqr6vgmwejmdgap", true);
	characterRequest.send();
	
	characterRequest.onload = function () {
		characterData = characterRequest.response;
		
		document.getElementById("character").appendChild(
			document.createElement("ul")
		);
	};
	
}