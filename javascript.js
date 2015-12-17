function newPage() {
	alert("You will now be judged.");
	var answer = prompt("do you wanna have a bad time?");
	if (answer == "yes") {
		window.location.replace("yes.html");
	}
	else {
		window.location.replace("no.html");
	}
	alert("i havent actually gotten this whole redirect thing working on google chrome yet...");
}
