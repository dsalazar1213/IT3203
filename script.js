<script>
        function gradeQuiz() {
            let score = 0;
            const totalQuestions = 5;
            let resultHTML = "";
// Question 1: Check fill-in answer
            // Question 1
            const q1 = document.getElementById("q1").value.trim().toLowerCase();
            const q1Correct = "hypertext transfer protocol";
            if (q1 === q1Correct) {
                score++;
                resultHTML += "<p class='correct'>Question 1: Correct. Answer: HyperText Transfer Protocol</p>";
            } else {
                resultHTML += "<p class='incorrect'>Question 1: Incorrect. Correct answer: HyperText Transfer Protocol</p>";
            }
// Question 2: Check selected radio button
            // Question 2
            const q2 = document.querySelector('input[name="q2"]:checked');
            if (q2 && q2.value === "GET") {
                score++;
                resultHTML += "<p class='correct'>Question 2: Correct. Answer: GET</p>";
            } else {
                resultHTML += "<p class='incorrect'>Question 2: Incorrect. Correct answer: GET</p>";
            }
// Question 3: Check selected radio button
            // Question 3
            const q3 = document.querySelector('input[name="q3"]:checked');
            if (q3 && q3.value === "Encryption") {
                score++;
                resultHTML += "<p class='correct'>Question 3: Correct. Answer: Encrypt communication</p>";
            } else {
                resultHTML += "<p class='incorrect'>Question 3: Incorrect. Correct answer: Encrypt communication</p>";
            }
// Question 4: Check selected radio button
            // Question 4
            const q4 = document.querySelector('input[name="q4"]:checked');
            if (q4 && q4.value === "Stateless") {
                score++;
                resultHTML += "<p class='correct'>Question 4: Correct. Answer: Stateless</p>";
            } else {
                resultHTML += "<p class='incorrect'>Question 4: Incorrect. Correct answer: Stateless</p>";
            }
// Question 5: Check multiple selections
            // Question 5
            const q5Checked = document.querySelectorAll('input[name="q5"]:checked');
            const selectedValues = Array.from(q5Checked).map(item => item.value).sort();
            const correctValues = ["200", "404", "500"];
            if (JSON.stringify(selectedValues) === JSON.stringify(correctValues)) {
                score++;
                resultHTML += "<p class='correct'>Question 5: Correct. Answers: 200, 404, 500</p>";
            } else {
                resultHTML += "<p class='incorrect'>Question 5: Incorrect. Correct answers: 200, 404, 500</p>";
            }
// Determine pass or fail result
            const passFail = score >= 3 ? "PASS" : "FAIL";
            const passFailClass = score >= 3 ? "correct" : "incorrect";

            document.getElementById("quizResults").innerHTML =
                "<h2>Results</h2>" +
                "<p class='" + passFailClass + "'><strong>Overall Result:</strong> " + passFail + "</p>" +
                "<p><strong>Total Score:</strong> " + score + " out of " + totalQuestions + "</p>" +
                resultHTML;
        }
// Reset function clears results display
        function resetResults() {
            document.getElementById("quizResults").innerHTML =
                "<h2>Results</h2><p>Your results will appear here after you submit the quiz.</p>";
        }
    </script>
