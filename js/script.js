var intro = "Welcome to the race!!";

var fistName = "What is your name?";
var interested = "Are you interested in racing?"
var race = "Want to race?";

var elP = document.querySelector("P")


var alertIntro = alert (intro);
var answerFistName = prompt (fistName).trim();
var answerInterested = prompt (interested).trim();
var answerRace = prompt (race).trim();
var youage= Number(prompt("Enter you age").trim());
// var older = 50; -->
var number = 18;
// var average = 15; -->
// var baby = 0 -->

if (isNaN(youage)) {
  elP.textContent = "Please enter a number!";
} else {
  if (youage >= number) {
    elP.textContent =`${answerFistName}, you can participate in the race, good luck to you!!`;
  }else {
    elP.textContent =`${answerFistName}, you are too young to race! `;
  }
}

//Ustoz shunni korib bering!!

// if (isNaN(youage)) {
//   elP.textContent = "Please enter a number!";
// } else {
//   if (youage >= older) {
//     elP.textContent =`${answerFistName}, you are too big we can't race you!! yoshingiz`;
//    }
//    else {
//    elP.textContent =`${answerFistName}, you can participate in the race, good luck to you!! `;
//   }
//   if (youage >= number) {
//     elP.textContent =`${answerFistName}, you can participate in the race, good luck to you!!`;
//    }
//    else {
//    elP.textContent =`${answerFistName}, you are too young to race! `;
//   }
//   if (youage >= average) {
//     elP.textContent =`${answerFistName}, you are not old enough!`;
//   } else {
//     elP.textContent = `${answerFistName}You are too young, turn 18`;
//   }

//   if (youage >= baby) {
//     elP.textContent = `${answerFistName}You are too young, turn 18`;
//   } else {
//     elP.textContent = `You are not born yet!!`
//   }
// } 


console.log ( `"Info"
  What is your name? ${answerFistName};
  Are you interested in racing? ${answerInterested};
  Want to race? ${answerRace};
  Enter you age! ${youage};
`)

