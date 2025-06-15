document.addEventListener("DOMContentLoaded", function () {
  function checkAnswer() {
    const correctAnswer = "4";

    const userAnswer = document.querySelector(
      'input[name="quiz"]:checked'
    ).value;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
      feedback.innerHTML = "Correct! Well done.";
    } else {
      feedback.innerHTML = "That's incorrect. Try again!";
    }
  }

  const submitAnswer = document.getElementById("submit-answer");
  submitAnswer.addEventListener("click", checkAnswer);
});
