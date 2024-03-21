// クイズデータ
const quizData = [
  {
    question: '日本の首都はどこ？',
    choices: ['東京', '大阪', '名古屋', '福岡'],
    answer: '東京'
  },
  {
    question: '富士山は何県にある？',
    choices: ['静岡県', '山梨県', '神奈川県', '長野県'],
    answer: '静岡県'
  }
  // 他の問題を追加
];

// 変数定義
let currentQuestionIndex = 0;
let score = 0;

// HTML要素の取得
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');

// 問題を表示する関数
function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', checkAnswer);
    choicesEl.appendChild(li);
  });
}

// 解答をチェックする関数
function checkAnswer(e) {
  const selectedChoice = e.target.textContent;
  const correctAnswer = quizData[currentQuestionIndex].answer;

  if (selectedChoice === correctAnswer) {
    score++;
    scoreEl.textContent = score;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    alert(`クイズ終了！あなたのスコアは${score}点です。`);
  }
}

// 次の問題へ進む関数
nextBtn.addEventListener('click', showQuestion);

// 最初の問題を表示
showQuestion();
