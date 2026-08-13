const questions = [
  {
    question: `What does this code return? (0 || '' || false || "Hi")`,
    answers: [
      { text: "0", correct: false },
      { text: '"Hi"', correct: true },
      { text: "false", correct: false },
      { text: "''", correct: false },
    ],
  },
  {
    question: "What is it called when a function calls itself?",
    answers: [
      { text: "Inception", correct: false },
      { text: "Self-Referential", correct: false },
      { text: "Recursion", correct: true },
      { text: "Who Cares", correct: false },
    ],
  },
  {
    question:
      "How do you access the value of the data-count data attribute in JavaScript?",
    answers: [
      { text: "element.dataset.count", correct: true },
      { text: "element.dataAttribute.count", correct: false },
      { text: "element.dataset.dataCount", correct: false },
      { text: "element.dataCount", correct: false },
    ],
  },
];

const quizForm = document.getElementById("quiz-form");
questions.forEach((question) => {
  const ol = document.createElement("ol");
});
