const questions = [
{
        question: "Which organ do ants lack?",
        answers: [
            {text: "Stomach", correct: false},
            {text: "Eyes", correct: false},
            {text: "Lungs", correct: true},
            {text: "Heart", correct: false},
        ]
    },


    {
        question: "For how many years have sharks roamed the earth?",
        answers: [
            {text: "350 million", correct: false},
            {text: "450 million", correct: true},
            {text: "700 million", correct: false},
            {text: "1000 million", correct: false},
        ]
    },


    {
        question: "What is a group of owls called?",
        answers: [
            {text: "A group", correct: false},
            {text: "A Parliament", correct: true},
            {text: "A collection", correct: false},
            {text: "A herd", correct: false},
        ]
    },

    {
        question: " Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },

    {
        question: "What is a group of pandas called?",
        answers: [
            {text: "A group", correct: false},
            {text: "An Embarrassment", correct: true},
            {text: "A herd", correct: false},
            {text: "A crash", correct: false},
        ]
    },

    {
        question: "How many hearts does an octopus have?",
        answers: [
            {text: "3", correct: true},
            {text: "1", correct: false},
            {text: "0", correct: false},
            {text: "5", correct: false},
        ]
    },

    {
        question: "Which mammal has no vocal cords?",
        answers: [
            {text: "Monkey", correct: false},
            {text: "Lion", correct: false},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: true},
        ]
    },

    {
        question: "How many toes do cats typically have?",
        answers: [
            {text: "18", correct: true},
            {text: "5", correct: false},
            {text: "4", correct: false},
            {text: "20", correct: false},
        ]
    },

    {
        question: "What color is a polar bear's skin?",
        answers: [
            {text: "White", correct: false},
            {text: "Brown", correct: false},
            {text: "Black", correct: true},
            {text: "Grey", correct: false},
        ]
    },

    {
        question: "What is a group of rhinos called?",
        answers: [
            {text: "A herd", correct: false},
            {text: "A group", correct: false},
            {text: "A collection", correct: false},
            {text: "A crash", correct: true},
        ]
    },

    {
        question: "How much bamboo does a giant panda eat in a day?",
        answers: [
            {text: "59 pounds", correct: false},
            {text: "84 pounds", correct: true},
            {text: "25 pounds", correct: false},
            {text: "48 pounds", correct: false},
        ]
    },

    {
        question: "What do you call a group of zebras?",
        answers: [
            {text: "A group", correct: false},
            {text: "A dazzel", correct: true},
            {text: "A herd", correct: false},
            {text: "A crash", correct: false},
        ]
    },

    {
        question: "Which animal is referred to as the 'king of the jungle'?",
        answers: [
            {text: "Hyena", correct: false},
            {text: "Lion", correct: true},
            {text: "Cheetah", correct: false},
            {text: "Zebra", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore(); 
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();  // This line starts the quiz and calls showQuestion()
