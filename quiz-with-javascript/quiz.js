const question = [
    {
        question: "What is the capital of India?",
        answer: [
            {text: "New Delhi", correct: true},
            {text: "Mumbai", correct: false},
            {text: "Chennai", correct: false},
            {text: "Kolkata", correct: false}
        ]
    },

    {
        question: "What is the capital of USA?",
        answer: [
            {text: "Washington", correct: true},
            {text: "New York", correct: false},
            {text: "California", correct: false},
            {text: "Texas", correct: false}
        ]
    },
    {
        question: "What is the capital of Canada?",
        answer: [
            {text: "Vancouver", correct: false},
            {text: "Ottawa", correct: true},
            {text: "Toronto", correct: false},
            {text: "Montreal", correct: false}
        ]
    },
    {
        question: "What is the capital of Australia?",
        answer: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Brisbane", correct: false},
            {text: "Canberra", correct: true}
        ]
    },
    {
        question: "What is the capital of UK?",
        answer: [
            {text: "London", correct: true},
            {text: "Manchester", correct: false},
            {text: "Birmingham", correct: false},
            {text: "Liverpool", correct: false}
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            {text: "Paris", correct: true},
            {text: "Marseille", correct: false},
            {text: "Lyon", correct: false},
            {text: "Lille", correct: false}
        ]
    },
    {
        question: "What is the capital of Japan?",
        answer: [
            {text: "Tokyo", correct: true},
            {text: "Osaka", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Nagoya", correct: false}
        ]
    },
    {
        question: "What is the capital of China?",
        answer: [
            {text: "Beijing", correct: true},
            {text: "Shanghai", correct: false},
            {text: "Nanjing", correct: false},
            {text: "Chengdu", correct: false}
        ]
    },
    {
        question: "What is the capital of Turkey?",
        answer: [
            {text: "Ankara", correct: true},
            {text: "İstanbul", correct: false},
            {text: "Trabzon", correct: false},
            {text: "Konya", correct: false}
        ]
    },
    {
        question: "What is the capital of Germany?",
        answer: [
            {text: "Berlin", correct: true},
            {text: "Munich", correct: false},
            {text: "Hamburg", correct: false},
            {text: "Frankfurt", correct: false}
        ]
    }
];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-button");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();    
    let currentQuestion= question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
       selectedBtn.classList.add("correct");
       score++;
    }
    else{
        selectedBtn.classList.add("incorrent");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display= "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML= "Start Again";
    nextButton.style.display= "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();