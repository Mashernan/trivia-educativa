import questions from './data/questions.js';

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('score');

// Estado inicial
let currentIndex = 0;
let score = 0;

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
  const correct = questions[currentIndex].answer;
  if (userAnswer === correct) {
    score++;
    alert('✅ ¡Correcto!');
  } else {
    alert('❌ Incorrecto. La respuesta correcta es: ' + correct);
  }

  updateScore();
}

function updateScore() {
  scoreDisplay.textContent = `Puntaje: ${score}`;
}

nextButton.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    questionContainer.textContent = '🎉 ¡Trivia finalizada!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';

    // Botón para reiniciar
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Reiniciar';
    restartButton.className = 'option-button';
    restartButton.onclick = restartTrivia;
    optionsContainer.appendChild(restartButton);
  }
};

function restartTrivia() {
  currentIndex = 0;
  score = 0;
  updateScore();
  nextButton.style.display = 'inline-block';
  showQuestion();
}

showQuestion();
updateScore(); // Inicializa puntaje en pantalla



