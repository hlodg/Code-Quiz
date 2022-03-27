
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
        "answer": "C",
    }
];

var userScore=0;

var currentQ = 0;
// create timer on start of start button
start.addEventListener("click", function () {   

    var quizTimer= setInterval(function() {
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

var nxtQ= function nextQuestion() {
    var answered = this.innerHTML;
    var correctAns = questionText[currentQ].answer;
    if (answered == correctAns){
        userScore++;
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
    var questspace=document.getElementById("questionspace");
    questspace.innerHTML = initials+" : Your score is "+userScore;
};
