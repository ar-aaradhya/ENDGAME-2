//Introduction of quiz
console.log("----------------------------------");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("what is your name?");
console.log("welcome "+ userName + " how well do you know aaradhya?");
console.log("lets find out!");


console.log(" ");


//function play
 function play(question,answer){
  var userAnswer = readlineSync.question(question);
  console.log("you entered " + userAnswer);

  if(userAnswer === answer){
    console.log("you are right!");
    score = score+2;
    console.log("Your score is " + score);
  }
  else{
    console.log("OOPS! You are wrong");
    score = score-1;
    console.log("Your score is " + score);
  }
  console.log("-------------------");
}
// array of objects
var questions = [{
  question: "what is my age? ",
  answer:"20",
},{
  question: "where do i live currently? ",
  answer: "kolkata",
  },{
  question: "what do i love doing most? ",
  answer:"reading",
  }];

  //loop the questions
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer)
  }

console.log("current score: " + score);
console.log("Thankyou for playing "+ userName + " SEE YOU AROUND NEXT TIME");

console.log(" ");

//high score
console.log("leaderBoard");
var highscores =[
 {
name: "sunny",
score:"10",
},
{
  name: "ayush",
score: "9",
},
]

for(var i=0;i<highscores.length;i++){
  var currentHighscore = highscores[i];
console.log(currentHighscore.name);
console.log(currentHighscore.score);

}

