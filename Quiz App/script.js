// create a quiz app of 10 random mcq type questions.
// next button click -> next question...
// each question should be display for 60 second.
// after 60 second it should be change to next question.
// count user's mark while attempting test and show at the end of quiz.
// and show excellent, good, average, poor result based on mark.

//---->

const questionsList = [

    {
        question: "Which tag is used to create a hyperlink in HTML?",

        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },

    {
        question: "Which CSS property is used to change the text color?",

        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: 2
    },

    {
        question: "Which HTML tag is used to insert an image?",

        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        answer: 1
    },

    {
        question: "Which CSS property is used to change the background color?",

        options: [
            "bg-color",
            "background",
            "background-color",
            "color-background"
        ],
        answer: 2
    },

    {
        question: "Which keyword is used to declare a constant in JavaScript?",

        options: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: 2
    },

    {
        question: "Which method is used to print output in the browser console?",

        options: [
            "console.print()",
            "console.log()",
            "print.console()",
            "log.console()"
        ],
        answer: 1
    },

    {
        question: "Which HTML tag is used to create an unordered list?",

        options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        answer: 2
    },

    {
        question: "Which CSS property is used to make text bold?",

        options: [
            "font-style",
            "font-weight",
            "text-bold",
            "font-bold"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used for a class selector in CSS?",

        options: [
            "#",
            ".",
            "*",
            "@"
        ],
        answer: 1
    },

    {
        question: "Which JavaScript method is used to select an element by its ID?",

        options: [
            "getElementById()",
            "getElementByClass()",
            "queryById()",
            "selectElement()"
        ],
        answer: 0
    }

];

const question_index = document.getElementById("question-index");
const question = document.getElementById("question");

const option_A_text = document.getElementById("option-a-text");
const option_B_text = document.getElementById("option-b-text");
const option_C_text = document.getElementById("option-c-text");
const option_D_text = document.getElementById("option-d-text");

const option_A_btn = document.getElementById("option-a-btn");
const option_B_btn = document.getElementById("option-b-btn");
const option_C_btn = document.getElementById("option-c-btn");
const option_D_btn = document.getElementById("option-d-btn");

const timer_counter = document.getElementById("timer-count");
const next_question_btn = document.getElementById("next-question-btn");

let currentQuestionIndex = -1;
let seconds = 60;

const displayQuestion = () => {
  currentQuestionIndex++;
  question_index.textContent = "Q-" + (currentQuestionIndex + 1);
  question.textContent = questionsList[currentQuestionIndex].question;
  option_A_text.textContent = questionsList[currentQuestionIndex].options[0];
  option_B_text.textContent = questionsList[currentQuestionIndex].options[1];
  option_C_text.textContent = questionsList[currentQuestionIndex].options[2];
  option_D_text.textContent = questionsList[currentQuestionIndex].options[3];
};

// pending
setInterval(() => {
  timer_counter.textContent = seconds;
  seconds--;
}, 1000);

next_question_btn.addEventListener("click", displayQuestion);

displayQuestion();
