function submitAnswer() {
    const correctAnswer = "Hyper Text MarkUp Language";
    let feedback = document.getElementById("feedback");
    let selected = document.querySelector('input[name="quiz"]:checked');

    if (selected && selected.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";
    }
} 