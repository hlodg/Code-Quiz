
var start = document.getElementById("startBtn");

var index=0;
var nowQuestion;
var linebreak = document.createElement("br");


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

var userScore=0;
var quizTimer;

var currentQ = 0;
// create timer on start of start button
start.addEventListener("click", function () {   

    start.style.visibility="hidden";

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

var timeSec= 300;
var messageCorrect= document.getElementById("rightWrong");

var nxtQ= function nextQuestion() {
    var answered = this.innerHTML;
    var correctAns = questionText[currentQ].answer;
    if (answered == correctAns){
        userScore++;
        messageCorrect.textContent="Right!";
    }else{
        messageCorrect.textContent="Wrong!";
    //    quizTimer= timeSec- 15;
    // need to figure out timer minus 15 seconds
    }

    currentQ++;
    if(currentQ<questionText.length){
        displayQ(currentQ);
    } else{
        displayScore();
    }
}

var quest= document.getElementById("question");

var answers=document.getElementById("answers");
var answerBtns=[];

for(var i=0; i<4; i++){
    var ans=document.createElement("button");
    ans.addEventListener("click", nxtQ)
    answerBtns.push(ans);
}


function displayQ(j){

    quest.textContent=questionText[j].question;

    for(var i=0; i<4; i++){
        answerBtns[i].textContent=questionText[j].choices[i];
        answers.appendChild(answerBtns[i]);
    }

};


function displayScore(){
    var initials = prompt("What are your initials?");
    // need to add form for initials instead of prompt
    var questspace=document.getElementById("questionspace");
    questspace.innerHTML = initials+" : Your score is "+userScore;
    messageCorrect.style.visibility="hidden";
};
