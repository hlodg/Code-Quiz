
var start = document.getElementById("startBtn");
var index=0;
var nowQuestion;
var timeSec= 300;
var messageCorrect= document.getElementById("rightWrong");
var userScore=0;
var quizTimer;
var currentQ = 0;
var quest= document.getElementById("question");
var answers=document.getElementById("answers");
var answerBtns=[];
var scores=[];
var scoresHigh=document.getElementById("highscore")
var initials;

// question array
var questionText=[
    {"question":"How do you add a button in Javascript?",
        "choices": ["textContent", "appendChild", "createElement", "style.visibility"],
        "answer": "createElement",
    },

    {"question":"Where do we put the script tag for javascript?",
        "choices": ["HTML head", "HTML beginning of body", "script.js document", "HTML end of body"],
        "answer": "HTML end of body",
    },

    {"question":"How do you create an alert in javascript?",
        "choices": ["prompt", "alert", "form", "document.getElementbyId"],
        "answer": "alert",
    },

    {"question":"Where could you find information about javascript?",
        "choices": ["MDN schools", "W3schools", "freecodecamp", "All of the Above"],
        "answer": "All of the Above",
    },

    {"question":"How do you create a function in javascript?",
        "choices": ["function(){}", "func(){}", "call myFunction()", "declareFunction()"],
        "answer": "function(){}",
    }
];

// create timer on start of start button
start.addEventListener("click", function () {   

    //hides start button after the click event
    start.style.visibility="hidden";

    // creates time function and displays it in the header.
    quizTimer= setInterval(function() {
        timeSec--; 
        if (timeSec>0){
            var displayTime= document.getElementById("timer");
            displayTime.textContent = timeSec + " seconds left";
        }
        else {
            clearInterval(quizTimer);
            alert("Time is up.");
            displayScore();
        }

    },1000);
    
    displayQ(currentQ);
});

// creates a function that displays the next question and scores when right or wrong
function nextQuestion() {
    var answered = this.innerHTML;
    var correctAns = questionText[currentQ].answer;
    if (answered == correctAns){
        userScore++;
        messageCorrect.textContent="Right!";
    }else{
        messageCorrect.textContent="Wrong!";
        timeSec-=15;
    }

    currentQ++;
    if(currentQ<questionText.length){
        displayQ(currentQ);
    } else{
        displayScore();
        // how do i stop timer?
    }
}

// creates the answer buttons and displays the array in the buttons.
for(var i=0; i<4; i++){
    var ans=document.createElement("button");
    ans.addEventListener("click", nextQuestion)
    answerBtns.push(ans);
}

// creates the question within the  question space. Appends the answers to the question
function displayQ(j){

    quest.textContent=questionText[j].question;

    for(var i=0; i<4; i++){
        answerBtns[i].textContent=questionText[j].choices[i];
        answers.appendChild(answerBtns[i]);
    }

};


var scoreObj= {
    initials:initials,
    score: userScore,
}

// Creates display score function and initial recorded in the final page
function displayScore(){
    initials = prompt("What are your initials?");

    // quizTimer.style.visibility="hidden";

    var questspace=document.getElementById("questionspace");
    questspace.innerHTML = initials + " : Your score is " + userScore;

    messageCorrect.style.visibility="hidden";

};

scoresHigh.innerHTML(scoreObj);