$(document).ready(function(){
var eightball = {};
$("#answer").hide();
eightball.answerList = ["you betcha", "perhaps", "are you sure you want to know?", "of course", "absolutely", "yes!", "nope", "weep womp", "ask me after I've had my coffee", "I think you already know the answer"];


eightball.announce = function(){

  var randomNumber = Math.random();
  var randomNumberArray = randomNumber * this.answerList.length;
  var randomIndex = Math.floor(randomNumberArray);
  var randomAnswer = this.answerList[randomIndex];
	$("#8ball").effect("shake");
	$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  $("#answer").text(randomAnswer);

};

var questionButton = document.getElementById("questionButton");
var onClick = function(){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

	setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           eightball.announce(question);
       }, 500);

};
	$("#questionButton").click(onClick);
	});
