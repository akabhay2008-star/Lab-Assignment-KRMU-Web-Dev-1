// 1. Quiz Questions Array
const quizQuestions = [
  { question: "What is the capital of India?", answer: "delhi" },
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language",
  },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Which language is used to style web pages?", answer: "css" },
];

// 2. Function to Run the Quiz
function runQuiz() {
  let score = 0; // 3. Score Initialization

  // 4. Loop Through All Questions
  for (let i = 0; i < quizQuestions.length; i++) {
    // 5. Prompt user for input
    let userAnswer = prompt(quizQuestions[i].question);

    // If user clicked Cancel
    if (userAnswer === null) {
      alert("Quiz cancelled!");
      return;
    }

    // 6. Normalize Input
    userAnswer = userAnswer.toLowerCase().trim();

    // 7. Check Answer
    if (userAnswer === quizQuestions[i].answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong\nCorrect answer: " + quizQuestions[i].answer);
    }
  }

  // 9. Display Final Score
  alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}
