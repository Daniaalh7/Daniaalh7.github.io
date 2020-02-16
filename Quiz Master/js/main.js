function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;


	if (question1 == "France") {
		correct++;
}
	if (question2 == "Manchester United") {
		correct++;
}	
	if (question3 == "C.Ronaldo") {
		correct++;
}   
    if (question4 == "Neymar") {
		correct++;
}
    if (question5 == "Real Madrid") {
		correct++;
}
    if (question6 == "91") {
		correct++;
}
	
	var pictures = ["Images/6.gif", "Images/5.gif", "Images/4.gif", "Images/3.gif", "Images/2.gif", "Images/1.gif", "Images/0.gif"];
	var messages = ["You are a football Specialist, Well done!", "Good knowledge, very good effort!", "Decent knowledge, Nice!", "Not bad, could be better!", "Not the best score!", "Very poor effort!", "Shocking, you need to improve your Football knowledge!"];
	var score;

	if (correct == 0) {
		score = 6;
	}

	if (correct == 1) {
		score = 5;
	}

	if (correct == 2) {
		score = 4;
	}

    if (correct == 3) {
		score = 3;
	}

    if (correct == 4) {
		score = 2;
	}

    if (correct == 5) {
		score = 1;
	}
    
    if (correct == 6) {
		score = 0;
	}

	document.getElementById("after_text").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = correct + "/6" + " correct";
	document.getElementById("picture").src = pictures[score];
	}