var scoreList=JSON.parse(localStorage.getItem("scores"));

for(var i=0; i<scoreList.length; i++){
    var listItem= document.createElement("li");
    var list=document.getElementById("highscore");
    list.appendChild(listItem);

    listItem.textContent=scoreList[i].initials + "  -  " +scoreList[i].score;
}