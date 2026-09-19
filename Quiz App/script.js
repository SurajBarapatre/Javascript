// create a quiz app of 10 random mcq type questions.
// next button click -> next question...
// each question should be display for 60 second.
// after 60 second it should be change to next question and previous button for go to previous question.
// count user's mark while attempting test and show at the end of quiz.
// and show excellent, good, average, poor result based on mark.

//---->

// Question Block :-
// -------------------
const questionBlock = [
    { question: "Which tag is used to create a hyperlink in HTML?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },
    { question: "Which CSS property changes the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2
    },
    { question: "Which HTML tag is used to insert an image?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1
    },
    {question: "Which CSS property changes the background color?",
        options: [
            "bg-color",
            "background",
            "background-color",
            "color-background"
        ],
        answer: 2
    },
    {question: "Which keyword declares a constant in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2
    },


    { question: "Which method prints output in the browser console?",
        options: [
            "console.print()",
            "console.log()",
            "print.console()",
            "log.console()"
        ],
        answer: 1
    },
    {question: "Which HTML tag creates an unordered list?",
        options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        answer: 2
    },
    {question: "Which CSS property is used to make text bold?",
        options: [
            "font-style",
            "font-weight",
            "text-bold",
            "font-bold"
        ],
        answer: 1
    },
    {question: "Which symbol represents a class selector in CSS?",
        options: [
            "#",
            ".",
            "*",
            "@"
        ],
        answer: 1
    },
    { question: "Which method selects an element using its ID?",
        options: [
            "getElementById()",
            "getElementByClass()",
            "selectById()",
            "findElement()"
        ],
        answer: 0
    },
    { question: "Which tag is used for the largest heading?",
        options: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        answer: 2
    },
    { question: "Which CSS property controls space inside an element?",
        options: [
            "margin",
            "padding",
            "border",
            "spacing"
        ],
        answer: 1
    },
    { question: "Which JavaScript keyword declares a changeable variable?",
        options: [
            "let",
            "fixed",
            "constant",
            "static"
        ],
        answer: 0
    },
    { question: "Which operator checks value and data type?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        answer: 2
    },
    { question: "Which CSS property creates rounded corners?",
        options: [
            "corner-radius",
            "border-radius",
            "radius",
            "border-corner"
        ],
        answer: 1
    }
];

// For Get to Html Elements :-
// -------------------------
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizBox = document.getElementById("quiz-box");
const questionNumber = document.getElementById("question-number");
const question = document.getElementById("question");
const options = document.getElementById("options");
const timer = document.getElementById("timer");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result-box");
const score = document.getElementById("score");
const percentage = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

// Get Variables  :-
// --------------
let quizQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let timerId;

// For Store User Answers :-
// -----------------------
let userAnswers = [];

// For Store Time For Each Question :-
// --------------------------------
let questionTime = [];

// For Store Whether Question was Counted :-
// --------------------------------------
let answeredQuestions = [];

// Function for random 10 questions :-
// --------------------------------
function getRandomQuestions() {
    let shuffledQuestions = [...questionBlock];

    shuffledQuestions.sort(function () 
    {
        return Math.random() - 0.5;
    });

    return shuffledQuestions.slice(0, 10);
}

// For Fetch Start Quiz Button :-
// ----------------------------
    startBtn.addEventListener("click", function () {
    startScreen.classList.add("d-none");
    quizBox.classList.remove("d-none");
    resultBox.classList.add("d-none");

// Get random 10 questions :-
// ---------------------------------
    quizQuestions = getRandomQuestions();

// For Start from question 0 :-
// ---------------------------------
    currentQuestionIndex = 0;
// For Reset score
    userScore = 0;
// For Create answer storage :-
// ---------------------------------
    userAnswers = new Array(quizQuestions.length).fill(null);

// For Every question gets 60 seconds :-
// ---------------------------------
    questionTime = new Array(quizQuestions.length).fill(60);

// For No question counted yet :-
// ---------------------------------
    answeredQuestions = new Array(quizQuestions.length).fill(false);

// For Show first question
showQuestion();
});

// Function For Show Questions :-
// ---------------------------------

function showQuestion() {
// For Clear previous interval :-
// ---------------------------------
    clearInterval(timerId); const currentQuestion = quizQuestions[currentQuestionIndex];

//For Question number :-
// ---------------------------------
    questionNumber.textContent = "Question " + (currentQuestionIndex + 1) + " / " + quizQuestions.length;

// For Question text :-
// ---------------------------------
    question.textContent = currentQuestion.question;

// For Clear old options :-
// ---------------------------------
    options.innerHTML = "";

// For Create options:-
// ---------------------------------
    currentQuestion.options.forEach(function (option, index) 
        {
        const optionDiv = document.createElement("div");

        optionDiv.className = "form-check border rounded p-3 mb-2"

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = "quiz-option";

        radio.value = index;

        radio.className = "form-check-input";

// For Restore previous selected answer :-
// ------------------------------------
    if (userAnswers[currentQuestionIndex] == index) 
        {
        radio.checked = true;
        }
    const label = document.createElement("label");

    label.className = "form-check-label ms-2";

    label.textContent = option;

// For Change answer :-
// ---------------------------------
    radio.addEventListener("change",function () {
    userAnswers[currentQuestionIndex] = Number(radio.value);
    }
    );
    optionDiv.appendChild(radio);
    optionDiv.appendChild(label);
    options.appendChild(optionDiv);
    }
    );

// For Display current remaining time :-
// ---------------------------------
    timer.textContent = questionTime[currentQuestionIndex];

// For Previous button :-
// ---------------------------------
    if (currentQuestionIndex == 0) 
    {
        previousBtn.disabled = true;
    }
    else{
        previousBtn.disabled = false;
    }

// For Last question :-
// ---------------------------------
    if (
        currentQuestionIndex == quizQuestions.length - 1
    ) {
        nextBtn.classList.add("d-none");
        submitBtn.classList.remove("d-none");
    }
    else {
        nextBtn.classList.remove("d-none");
        submitBtn.classList.add("d-none");
    }


// For Start timer :-
// ---------------------------------
    startTimer();
}

// Timer :-
// ---------------------------------
function startTimer() {
    timerId = setInterval(function () {

// For Reduce current question time :-
// ---------------------------------
    questionTime[currentQuestionIndex]--;

    // For Display timer:-
// ---------------------------------
    timer.textContent = questionTime[currentQuestionIndex];

// Timer reaches zero :-
// ---------------------------------
    if (questionTime[currentQuestionIndex]<= 0) {
    clearInterval(timerId);

// Check current answer :-
// ---------------------------------
    saveAnswer();

// Automatically go next :-
// ---------------------------------
goNextQuestion();} }, 1000);
}

// For Save and check Answer :-
// ---------------------------------
function saveAnswer() {
    const selectedAnswer = userAnswers[currentQuestionIndex];

    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

// For If already counted, don't counting again :-
// ---------------------------------
    if (answeredQuestions[currentQuestionIndex]== true) {
        return;
    }

// for Mark question as counted :-
// ---------------------------------
    answeredQuestions[currentQuestionIndex] = true;

// For Check answer :-
// ---------------------------------
    if (selectedAnswer == correctAnswer) {
        userScore++;
    }
}

// For Next Question :-
// -----------------------
function goNextQuestion() {

// For Save current answer
    saveAnswer();

    // For Move to index
    currentQuestionIndex++;

    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
    }
    else {
        showQuestion();
    }
}

// For Next Button :-
// ---------------------------------
nextBtn.addEventListener("click",function () {

        clearInterval(timerId);

        goNextQuestion();

    }
);

// For Previous Button :-
// ---------------------------------
previousBtn.addEventListener("click",function () {

        clearInterval(timerId);

// For Move one question back
        currentQuestionIndex--;

// Show previous question
        showQuestion();
    }
);

// For Submit Quiz Button :-
// ---------------------------
submitBtn.addEventListener("click",function () {

        clearInterval(timerId);

// Save last question answer :-
// ---------------------------------
        saveAnswer();

// For Show alert only when quiz ends :-
// ---------------------------------
        alert("All questions are ended. Quiz submitted!");

        // For Show final result
        showResult();
    }
);

// For Show Result to User:-
// ---------------------------------
function showResult() {

    clearInterval(timerId);

//For Hide quiz :-
// ---------------------------------
    quizBox.classList.add("d-none");

// For Show result
    resultBox.classList.remove("d-none");

// For Calculate percentage :-
// ---------------------------------
    const userPercentage = (userScore / quizQuestions.length) * 100;

//For Show Score To User :-
// ---------------------------------
    score.textContent = "Your Score: " + userScore + " / " + quizQuestions.length;

// For Percentage of User :-
// ---------------------------------
    percentage.textContent = "Percentage: " + userPercentage + "%";

    // For Result
    if (userPercentage >= 80) {
        resultMessage.textContent = "Excellent!";
        resultMessage.className = "mt-4 text-success";
    }

    else if (userPercentage >= 60) {
        resultMessage.textContent = "Good!";
        resultMessage.className ="mt-4 text-primary";
    }

    else if (userPercentage >= 40) {
        resultMessage.textContent = "Average!";
        resultMessage.className = "mt-4 text-warning";
    }
    else {
        resultMessage.textContent = "Poor!";
        resultMessage.className = "mt-4 text-danger";
    }
}

// For Restart Quiz :-
// ---------------------------------
restartBtn.addEventListener("click",function () {

        clearInterval(timerId);

        resultBox.classList.add("d-none");

        startScreen.classList.remove("d-none");
    }
);

//-----------------------------------------------------------------------------------//-----------------------------------------------------------//
