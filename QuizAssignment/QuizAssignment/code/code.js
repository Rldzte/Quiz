const quizData = [
  {
    question1: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question2: "Which planet is known as the 'Red Planet'?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: "Mars"
  },
  {
    question3: "What is the largest country by area?",
    options: ["Russia", "China", "United States", "Canada"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Dollar", "Euro"],
    answer: "Yen"
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    options: ["Iron", "Gold", "Silver", "Copper"],
    answer: "Iron"
  },

  {
    question: "What is the most abundant gas in the Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Nitrogen"
  },
  {
    question: "Which country’s name means “The Shallows”?",
    options: ["Bahamas", "Madagascar", "Tasmania", "Argentina"],
    answer: "Bahamas"
  },
  {
    question: "Which of the Canary Islands is the largest and most populous?",
    options: ["La Palma", "Lanzarote", "Tenerife", "Gran Canaria"],
    answer: "Gran Canaria"
  },
  {
    question: "What type of rock is marble?",
    options: ["Metamorphic", "Igneous", "Granite", "Sedimentary"],
    answer: "Metamorphic"
  },
  {
    question: "Which colour is the most common on the national flags of the world, featuring on 75% of national flags?",
    options: ["Green", "White", "Red", "Blue"],
    answer: "Red"
  },
  {
    question: "The word “ananas” means what, in almost every other major language apart from English?",
    options: ["Apple", "Banana", "Asparagus", "Pineapple"],
    answer: "Pineapple"
  },
  {
    question: "During WWII; Utah, Omaha, Gold, Juno and Sword were nicknames for what?",
    options: ["Submarines", "Airfields", "Tanks", "Beaches"],
    answer: "Beaches"
  },
];



const question = document.getElementById("question");
const optionA = document.getElementById



const submitButton = document.querySelector('#next')
let inputField = document.querySelector('#input')
let resultText = document.querySelector('#result')
const nextBtn = document.getElementById("next-btn");

/*----PREVIOUS WORK ------*/
function checkAnswer(){
  if(inputField === answer){
    resultText.innerHTML = "Correct!"
    style.backgroundColor = "green";
  }
  else{
    resultText.innerHTML = "Incorrect!"
    style.backgroundColor = "red";
  }
}


var q1 = document.querySelector("q1").value.toLowerCase();
  var q2 = document.getElementById("q2").value.toLowerCase();
  var q3 = document.getElementById("q3").value.toLowerCase();
  var q4 = document.getElementById("q4").value.toLowerCase();
  var q5 = document.getElementById("q5").value.toLowerCase();
  var q6 = document.getElementById("q6").value.toLowerCase();
  var q7 = document.getElementById("q7").value.toLowerCase();
  var q8 = document.getElementById("q8").value.toLowerCase();
  var q9 = document.getElementById("q9").value.toLowerCase();
  var q10 = document.getElementById("q10").value.toLowerCase();
  var q11 = document.getElementById("q11").value.toLowerCase();
  var q12 = document.getElementById("q12").value.toLowerCase();


  var correctAnswers = 0;
  

  if (q1 == "Canberra") {
   
   
    document.querySelector("q1").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.querySelector("q1").style.backgroundColor = "red";
  }

  if (q2 == "Mars") {
   
    document.getElementById("q2").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
  }

  if (q3 == "Russia") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q4 == "Yen") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q5 == "Iron") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q6 == "Nitrogen") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q7 == "Bahamas") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q8 == "Gran Canaria") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q9 == "Metamorphic") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q10 == "Red") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q11 == "Pineapple") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

  if (q12 == "Beaches") {
    document.getElementById("q3").style.backgroundColor = "green";
    correctAnswers++;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
  }

/*----PREVIOUS WORK ------*/
  let score = 0;
  {
    if (inputField.value === answer) {
      score++;
  }
}

submitButton.onclick = checkAnswer




var result = document.getElementById("result");
  result.innerHTML = "You got " + correctAnswers + " out of 12 correct!";
