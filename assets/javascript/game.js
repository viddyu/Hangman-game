
prompt('Press any key to get started!');


// list of different hero's for hangman game.

var heroTypeArr = ['Black Panther', 'Batman', 'Superman', 'Iron man', 
'Hawkeye','Green Lantern', 'Captain Marvel', 'Miss Martian','Green Arrow', 'The Flash', 'The Question', 'Wonderwoman', 'Frilled Shark', 'Helicoprion', 'Huntress','Robin', 'Nightwing', 'Thor', 'Hulk', 'Captain America']

// using above array we choose a random word.
var heroType = heroTypeArr[Math.floor(Math.random() * heroTypeArr.length)];


// global variables 

var s;
var count = 0;
var answerArray = [];



function startUp() {
  for (var i = 0; i < heroType.length; i++) {
    answerArray[i] = "_";
  }

  // putting in a string
  s = answerArray.join(" ");
  document.getElementById("answer").innerHTML = s;
}

function letter() {
  var letter = document.getElementById("letter").value;

  if (letter.length > 0) {
    for (var i = 0; i < heroType.length; i ++) {
      if (heroType[i] === letter) {
        answerArray[i] = letter;
      }
    }
    count++;
    document.getElementById("counter").innerHTML = "No of clicks: " + count;
    document.getElementById("answer").innerHTML = answerArray.join(" ");
  }
  if(count>5) {
    document.getElementById("stat").innerHTML = "THEY ARE DEAD!";
  }
}
