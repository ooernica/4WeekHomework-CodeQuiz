// Show the first question
// Show the first answers
// When you click the answer
// Show the next question
// Console.log if it was right or wrong


var questionHeading = 
  document.querySelector('#question')
var answersList = 
  document.querySelector('#answers')

var questions = [
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

var currentQuestion = 0

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
  var array = questions[currentQuestion].answers
  for(var i = 0; i < array.length; i++) {
    answersList.innerHTML += 
      '<li class="answer"><button' +
      ' data-correct="' + 
      array[i].correct + '">' + 
      array[i].answer + 
      '</button></li>'
  }

  var answerButtons =
    document.querySelectorAll('.answer')

  // How do we get the correct answer
  for (var j = 0; j < answerButtons.length; j++) {
    answerButtons[j].addEventListener('click', function(event) {
      checkAnswer(event.target.getAttribute("data-correct"))
    })
  }
}

// My job is see if an answer was right or wrong
function checkAnswer(correct) {
  if (correct === 'true') {
    // Display correct
    alert ('GOOOOAL!')
  } else {
    // Display incorrect
    alert ('Ugh! A missed opportunity!')
  }
  currentQuestion++
  if (currentQuestion > questions.length - 1) {
    alert('all done')
  } else {
    showQuestion()
    showAnswers()
  }
}


showQuestion()
showAnswers()

// PSEUDO CODE!!

  // Keep track of the score
  // Save the score to localStorage when the game is done
  // Subtrack the time if you get the wrong answer

  // Instead of alert('all done') change the page to say all done
  // and show all the high scores

  // Display the time somewhere
  // Add a timer...