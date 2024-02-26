const questions = [
    {
        question: "Je suis un animal qui vit dans l'océan. Je suis un des plus grand mamiphère et j'ai une nageoire dorsale. Qui suis-je ?",
        options: ["Requin", "Baleine", "Dauphin"],
        correctAnswer: "Baleine",
        explanation: "Exact! Les baleines sont de grands mammifères marins avec une nageoire dorsale."
    },
    {
        question: "Je suis un animal que l'on trouve dans les déserts et j'ai un bosse sur mon dos. Qui suis-je ?",
        options: ["Chameau", "Dromadaire", "Lama", "Alpaga"],
        correctAnswer: "Dromadaire",
        explanation: "Exact! Les dromadaires sont bien connus pour leurs bosses dorsales, qui stocke de la graisse."
    },
    {
        question: "Je suis un animal qui vit dans les océans et j'ai huit bras. Qui suis-je ?",
        options: ["Calamar", "Méduse", "Pieuvre", "Poulpe"],
        correctAnswer: "Pieuvre",
        explanation: "Exact! Les pieuvres sont des céphalopodes avec huit bras et un corps mou."
    },
    {
        question: "Je suis un animal qui vit dans les arbres. Je suis connu pour ma queue préhensile et mon amour pour les bananes. Qui suis-je ?",
        options: ["Singe", "Koala", "Panda", "Ours"],
        correctAnswer: "Singe",
        explanation: "Exact! Les singes sont des primates arboricoles avec une queue préhensile et sont souvent associés à des bananes."
    },
    {
        question: "Je suis un animal qui vit dans les régions polaires. Je suis blanc et j'ai une fourrure épaisse pour me protéger du froid. Qui suis-je ?",
        options: ["Ours polaire", "Phoque", "Morse", "Loup"],
        correctAnswer: "Ours polaire",
        explanation: "Exact! Les ours polaires sont des mammifères carnivores adaptés aux environnements polaires avec leur fourrure épaisse."
    }
    // Ajoutez des explications pour les autres questions...
];

const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("result");
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestionIndex + 1}. ${question.question}</p>
        ${question.options.map(option => `
            <button class="option" onclick="checkAnswer('${option}', '${question.correctAnswer}')">${option}</button>
        `).join('')}
    `;
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const optionsButtons = document.querySelectorAll(".option");

    optionsButtons.forEach(button => {
        button.disabled = true; // Désactive tous les boutons après la réponse
        if (button.textContent === correctAnswer) {
            button.classList.add("correct"); // Ajoute la classe "correct" pour la bonne réponse
        } else if (button.textContent === selectedAnswer) {
            button.classList.add("incorrect"); // Ajoute la classe "incorrect" pour la mauvaise réponse
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreDisplay.textContent = `${score} sur ${questions.length}`;
    resultDisplay.innerHTML = ""; // Reset result display

    questions.forEach((question, index) => {
        const result = document.createElement("p");
        result.textContent = `${index + 1}. ${question.explanation || "Bonne réponse!"}`;
        if (selectedAnswer !== correctAnswer) {
            const explanation = document.createElement("span");
            explanation.textContent = ` La bonne réponse était : ${question.correctAnswer}.`;
            explanation.style.fontWeight = "bold";
            result.appendChild(explanation);
        }
        resultDisplay.appendChild(result);
    });
}

// Démarrez le quizz au chargement de la page
displayQuestion();
