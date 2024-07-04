const quizData1 = [
    {
        question: "What is the value of 5+7?",
        options: ["35", "12", "40", "22"],
        answer: "12"
    },
    {
        question: "What is the value of 5x7?",
        options: ["12", "40", "35", "45"],
        answer: "35"
    },
    {
        question: "What is the value of 4/2?",
        options: ["2", "1", "8", "6"],
        answer: "2"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData1.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${questionData.question}`;
        questionDiv.appendChild(questionTitle);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        questionData.options.forEach(option => {
            const optionItem = document.createElement('li');

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = option;

            optionItem.appendChild(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}


function submitQuiz() {
    const resultDiv = document.getElementById('result');
    let score = 0;

    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionData.answer) {
            score++;
            selectedOption.parentElement.classList.add('correct');
        } else if (selectedOption) {
            selectedOption.parentElement.classList.add('incorrect');
        }
    });

    resultDiv.textContent = `Your score is ${score} out of ${quizData.length}`;
}

document.getElementById('submit-quiz').addEventListener('click', submitQuiz);

loadQuiz();
