import questions from './data/questions.js';

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');


let currentIndex = 0;

function showQuestion() {
  const currentQuestion = questions[currentIndex];
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  if (currentQuestion.type === 'multiple') {
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'option-button';
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  } else if (currentQuestion.type === 'truefalse') {
    ['true', 'false'].forEach(val => {
      const button = document.createElement('button');
      button.className = 'option-button';
      button.textContent = val === 'true' ? 'Verdadero' : 'Falso';
      button.onclick = () => checkAnswer(val === 'true');
      optionsContainer.appendChild(button);
    });
  }
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentIndex];
  const correctAnswer = currentQuestion.answer;

  const buttons = document.querySelectorAll('.option-button');
  buttons.forEach(button => {
    button.disabled = true;
    const isCorrect = (button.textContent === correctAnswer) ||
                      (currentQuestion.type === 'truefalse' && (button.textContent === 'Verdadero' ? true : false) === correctAnswer);

    if (isCorrect) {
      button.classList.add('correct');
    } else if (button.textContent === userAnswer || 
              (currentQuestion.type === 'truefalse' && (button.textContent === 'Verdadero' ? true : false) === userAnswer)) {
      button.classList.add('incorrect');
    }
  });

  if (userAnswer === correctAnswer) {
    score++;
    scoreDisplay.textContent = `Puntaje: ${score}`;
  }
}



nextButton.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    questionContainer.textContent = '🎉 ¡Trivia finalizada!';
    optionsContainer.innerHTML = `<p>Tu puntaje final es: ${score} / ${questions.length}</p>`;
    nextButton.style.display = 'none';
    restartButton.style.display = 'inline-block';
    
    
  }
};
restartButton.onclick = restartQuiz;

showQuestion();

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  scoreDisplay.textContent = 'Puntaje: 0';
  nextButton.style.display = 'inline-block';
  restartButton.style.display = 'none';
  showQuestion();
}


