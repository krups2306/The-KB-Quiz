var readlineSync = require ("readline-sync");
var userScore = 0;
var username = readlineSync.question("What is your name? ");
console.log("Welcome " +username, "to 'The KB's Quiz...!' ");

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are right..!");
    userScore = userScore + 1;
  }
  else{
    console.log("Oops, you are wrong..!");
    userScore = userScore - 0;
  }
}


var questions = [{
  question: "Where do I live? ",
  answer: "ahmedabad"},{
  question: "Which color is my favourite? ",
  answer: "blue"},{
  question: "What am I studying in college? ",
  answer: "engineering"  
}]

for( var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("---------")
}
var highScore = {
  krupa: 3
}
console.log("Your score: ", userScore);
console.log("Highscore: ", highScore);

if(userScore === highScore.krupa){
  console.log("Congratulations...! You have created a new high score ")
}else{
  console.log("You have scored well..! ")
}

