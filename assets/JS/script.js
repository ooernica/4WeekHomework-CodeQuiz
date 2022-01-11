// variables 
let questionHeading = 
  document.querySelector('#question')
let answersList = 
  document.querySelector('#answers')
let answerScore=0
let timerDisplay =document.getElementById('countdown')
let timeLeft = 1000*60*1.5;

// timer
function startTimer(){
  let timeInterval = setInterval (function(){
    timeLeft=timeLeft-1000;
    timerDisplay.textContent = `${formatTime(timeLeft)} seconds left`;
     if ((timeLeft ===0) || (currentQuestion > questions.length-1)) { 
       timerDisplay.textContent = '';
       clearInterval(timeInterval);
       displayMessage ();
     } 
   },1000)
   }

   function displayMessage () {
   }

// formats the time from miliseconds to seconds 
 function formatTime (ms) {
  let seconds = Math.floor(ms/1000);
  return seconds
 }

//  time penalty if answer is wrong
 function penalty (){
  timeLeft=timeLeft-10000;
 }

let questions = [
  {
    question: 'When did the Avalanche move to Colorado?',
    answers: [
      {
        answer: '1979',
        correct: false,
      },
      {
        answer: '1995',
        correct: true,
      },
      {
        answer: '1967',
        correct: false,
      },
      {
        answer: '1997',
        correct: false,
      },
      {
        answer: '1972',
        correct: false,
      }
    ]
  },

  {
    question: 'How many times have the Avalance been in the playoffs?',
    answers: [
      {
        answer: '26',
        correct: true,
      },
      {
        answer: '41',
        correct: false,
      },
      {
        answer: '4',
        correct: false,
      },
      {
        answer: '25',
        correct: false,
      },
      {
        answer: '30',
        correct: false,
      }
    ]
  },

{
  question: 'Who is the owner of the Colorado Avalanche?',
    answers: [
      {
        answer: 'Joe Sakic',
        correct: false,
      },
      {
        answer: 'Jared Bednar',
        correct: false,
      },
      {
        answer: 'Gabriel Landeskog',
        correct: false,
      },
      {
        answer: 'Greg Sherman',
        correct: false,
      },
      {
        answer: 'Ann Walton Kroenke',
        correct: true,
      }
    ]
  },
  {
    question: 'How many Stanley Cups have the Avalanche won?',
    answers: [
      {
        answer: '5',
        correct: false,
      },
      {
        answer: '3',
        correct: false,
      },
      {
        answer: '1',
        correct: false,
      },
      {
        answer: '2',
        correct: true,
      },
      {
        answer: '0',
        correct: false,      
      }
    ]
  },
 {
    question: 'What was the name of the Avalanche before they moved to Colorado and changed their name?',
    answers: [
      {
        answer: 'Hartford Whalers',
        correct: false,
      },
      {
        answer: 'Edmonton Oilers',
        correct: false,
      },
      {
        answer: 'Quebec Nordiques',
        correct: true,
      },
      {
        answer: 'Winnipeg Jets',
        correct: false,
      },
      {
        answer: 'New York Rangers',
        correct: false,
      }
    ]
  }
]

let currentQuestion = 0

// My job is to change the question id and answer id
function showQuestion() {
  // Set the question heading text = the current question's question
  questionHeading.textContent = questions[currentQuestion].question
}

// My job is to show the possible answers
function showAnswers() {
  // Display the answer inside the answerList buttons
  // We have to use innerHTML because we are creating, buttons and stuff
  answersList.innerHTML = ''
  let array = questions[currentQuestion].answers
  for(let i = 0; i < array.length; i++) {
    answersList.innerHTML += 
      '<li><button class="answer"' +
      ' data-correct="' + 
      array[i].correct + '">' + 
      array[i].answer + 
      '</button></li>'
  }

  let answerButtons =
    document.querySelectorAll('.answer')

  // How do we get the correct answer
  for (let j = 0; j < answerButtons.length; j++) {
    answerButtons[j].addEventListener('click', function(event) {
      checkAnswer(event.target.getAttribute("data-correct"))
    })
  }
}


// My job is check to see an answeer was right or wrong and call the function to display on the screen
function checkAnswer(correct) {
  if (correct === 'true') {
    // Display correct
    validateYES();
    answerScore++
  } else {
    // Display incorrect
    validateNO()
    penalty()
  }
  currentQuestion++
  if (currentQuestion > questions.length-1) {
    setTimeout(function() { 
      document.querySelector('#displayAnswer').innerHTML = ""
    }, 1500);
    highscore()
    document.querySelector('#displayScore').classList.remove('hidden')
    document.querySelector('#displayScore').innerHTML = answerScore + " out of 5 and " + formatTime(timeLeft) + " out of 90 seconds" 
  } else { 
    setTimeout(function() { 
      document.querySelector('#displayAnswer').innerHTML = ""
    }, 1500)
    showQuestion()
    showAnswers()
  }
}


//the actual function to be able to display correct/incorrect text by creating div under the 
// questions/answer area + showing text. 

  function validateYES () {
    const newDiv =document.createElement ("div");
    const newContent =document.createTextNode("GOOOOAAAL!");
    newDiv.appendChild(newContent);
    const currentDiv =document.getElementById("container");
    document.querySelector('#displayAnswer').appendChild(newDiv);
  }

  function validateNO () {
    const newDiv =document.createElement ("div");
    const newContent =document.createTextNode("Ugh! What a missed opportunity!");
    newDiv.appendChild(newContent);
    const currentDiv =document.getElementById("container");
    document.querySelector('#displayAnswer').appendChild(newDiv);
  }

// changes the screen from the home page to the questions when you click start 
document.getElementById('startButton').addEventListener("click", function(){
  startTimer()
  showQuestion()
  showAnswers()
  document.getElementById('home').classList.add("hidden")
}) 

// start over button
document.getElementById('startOver').addEventListener("click", function(){
  document.getElementById('home').classList.remove("hidden")
  document.getElementById('question').classList.add("hidden")
  document.getElementById('answers').classList.add("hidden")
  document.getElementById('highscorePage').classList.add('hidden')
  document.getElementById('displayScore').classList.add('hidden')
})

// hides all other pages when the highscore page is called 
function highscore (){
  document.getElementById('highscorePage').classList.remove("hidden")
  document.getElementById('question').classList.add("hidden")
  document.getElementById('answers').classList.add("hidden")
}

// save score
document.getElementById('saveScore').addEventListener('click', function() {
  let initials = document.querySelector('#initials').value
  saveScore(formatTime(timeLeft),initials) 
})

  //  save score to local storage
   function saveScore (score,initials) {
      let highscores = localStorage.getItem('highscores')
      if (highscores){
      highscores=JSON.parse(highscores)
      } else{
        highscores = []
      }
      highscores.push({
        score,initials
      })
      localStorage.setItem("highscores",JSON.stringify(highscores))
     }
  
   // clear high scores in local storage
document.getElementById('clearHS').addEventListener('click', function() {
  localStorage.clear()
})
  

// to do / bug
// display local storage to page / clear from page when local storage is cleared
// can't retake quiz after finishing, must refresh