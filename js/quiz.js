const answerOptions = document.querySelectorAll('.answer-option');
const nextButton = document.querySelector('.next-question-btn');
const quizQuestion = document.querySelector('.quiz-question');
const feedbackMessage = document.querySelector('.feedback-message');
let currentQuestionIndex = 0;

const questions = [
  {
    question: "Apa itu Al-Qur'an?",
    answers: [
      { text: "Kitab suci umat Islam", correct: true },
      { text: "Buku sejarah", correct: false },
      { text: "Novel fiksi", correct: false }
    ]
  },
  {
    question: "Bagaimana kedudukan Al-Qur'an dalam sistem hukum Islam?",
    answers: [
      { text: "Sumber hukum utama", correct: true },
      { text: "Sumber hukum pelengkap", correct: false },
      { text: "Sumber hukum tradisional", correct: false }
    ]
  },
  {
    question: "Salah satu keistimewaan Al-Qur’an dibanding kitab suci lainnya adalah...",
    answers: [
      { text: "Keasliannya tetap terjaga sejak turun", correct: true },
      { text: "Ditulis oleh sahabat nabi", correct: false },
      { text: "Diterjemahkan ke semua bahasa", correct: false }
    ]
  },
  {
    question: "Sumber hukum Islam lainnya selain Al-Qur’an yang berfungsi sebagai pelengkap adalah ...",
    answers: [
      { text: "Perkataan Ulama", correct: false },
      { text: "Ijma, Qiyas, Hadis", correct: true },
      { text: "Fatwa Pemerintah", correct: false }
    ]
  },
  {
    question: "Apa makna dari prinsip ‘Adamul Haraj dalam penetapan hukum?",
    answers: [
      { text: "Tidak memberatkan umat manusia", correct: true },
      { text: "Menghindari hukum qiyas", correct: false },
      { text: "Menyulitkan manusia dalam beribadah", correct: false }
    ]
  },
  {
    question: "Apa Fungsi Penurunan Al-Qur’an yang diturunkan secara bertahap?",
    answers: [
      { text: "Mudah dicetak dan disalin", correct: false },
      { text: "Dapat diterima secara perlahan", correct: true },
      { text: "Bisa disesuaikan dengan bahasa daerah", correct: false }
    ]
  }
];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  quizQuestion.innerText = currentQuestion.question;
  answerOptions.forEach((option, index) => {
    option.innerText = currentQuestion.answers[index].text;
    option.classList.remove('correct', 'incorrect', 'disabled');
    option.onclick = () => selectAnswer(currentQuestion.answers[index], option);
  });
  feedbackMessage.classList.remove('correct', 'incorrect');
  feedbackMessage.style.display = 'none';
  nextButton.disabled = true;
}

function selectAnswer(answer, selectedOption) {
  answerOptions.forEach(option => {
    option.onclick = null;
    option.classList.add('disabled');
  });
  if (answer.correct) {
    selectedOption.classList.add('correct');
    feedbackMessage.innerText = "✅ Jawaban Kamu Benar!";
    feedbackMessage.classList.add('correct');
  } else {
    selectedOption.classList.add('incorrect');
    feedbackMessage.innerText = "❌ Opsss! Jawaban Kamu Salah, Baca Lagi Materinya Yuk!";
    feedbackMessage.classList.add('incorrect');
  }
  feedbackMessage.style.display = 'block';
  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    currentQuestionIndex = 0;
    loadQuestion();
  }
});

loadQuestion();