// console.log("it'sworking");
// link to question
var question_box = document.querySelector("questionspace");

// carousel buttons
var start = document.getElementById("startBtn");

//index variables and fillers
var index=0;
var nowQuestion;

// question array
var questionText=[
    {"question":"Question1?",
        "choices": ["A", "B", "C", "D"],
        "answer": "B",
    },

    {"question":"Question2?",
        "choices": ["A", "B", "C", "D"],
        "answer": "B",
    }
];

// create timer on start of start button
start.addEventListener("click", function () {   

    var quizTimer= setInterval(function() {
        timeSec--; 
            if (timeSec>0){
                var displayTime= document.getElementById("timer");
                displayTime.textContent = timeSec;
            }
            else {
                clearInterval(quizTimer);
                alert("Time is up.");
            }

            displayQ()

        },1000);
    });

var timeSec= 300;

function displayQ(){
console.log ("its working")
};

//function to check if answer correct on selecting submit button
function correctAnswer () {
//   console.log('its working');


}
// navigation function
function nextQuestion() {

}

// start.addEventListener("click", console.log("its working"));


//function for display right or wrong after answer questions

function rightWrong(){

};

//score sheet at the end

function score(){

};
