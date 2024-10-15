const infoQuestion = [
  {
    question: "Question 1: What is the biggest animal?",
    answer1: "Elephant",
    answer2: "Blue Whale",
    answer3: "Rhino",
    solution: "Blue Whale"
  },
  {
    question: "Question 2: What is the smallest animal from these 3 options?",
    answer1: "Dog",
    answer2: "Tiger",
    answer3: "Fly",
    solution: "Fly"
  },
  {
    question: "Question 3: What is the tallest animal in the world?",
    answer1: "Ant",
    answer2: "Lion",
    answer3: "Giraffe",
    solution: "Giraffe"
  },
  {
    question: "Question 4: .How many compartments does a cow’s stomach have?",
    answer1: "Four",
    answer2: "Five",
    answer3: "Two",
    solution: "Four"
  },
  {
    question: "Question 5: How many bones does a shark have?",
    answer1: "321",
    answer2: "239",
    answer3: "None",
    solution: "None"
  },
  {
    question: "Question 6: What is a baby rabbit called?",
    answer1: "A bear",
    answer2: "A kit",
    answer3: "A blanket",
    solution: "A kit"
  },
  {
    question: "Question 7: Which animal is invisible when seen in infrared cameras?",
    answer1: "Polar bears",
    answer2: "Bats",
    answer3: "Mosquitos",
    solution: "Polar bears"
  },
  {
    question: "Question 8: How many hours a day on average do koalas sleep?",
    answer1: "22 h",
    answer2: "23 h",
    answer3: "20 h",
    solution: "20 h"
  },
  {
    question: "Question 9: What is a female donkey called?",
    answer1: "Maria",
    answer2: "Jessy",
    answer3: "Jenny",
    solution: "Jenny"
  },
  {
    question: "Question 10: Which animal is referred to as the -king of the jungle-?",
    answer1: "Cheetah",
    answer2: "Lion",
    answer3: "Tiger",
    solution: "Lion"
  },

];

let indexQuestionary = 0
const clickAnswer1 = document.getElementById("answer1");
const clickAnswer2 = document.getElementById("answer2");
const clickAnswer3 = document.getElementById("answer3");
const Question = document.getElementById("Question");
const list = document.querySelector("ul");
const body = document.querySelector("body")
let answerMessage = document.createElement("answerMessageElement");
const nextQuestion = document.createElement("button");
nextQuestion.textContent = "Next Question";
let totalScore = 0;

let question1Answered = false;
list.appendChild(answerMessage);
list.appendChild(nextQuestion);
answerMessage.style.visibility = "hidden";
nextQuestion.style.visibility = "hidden";


function handleClickOnAnswer1(){
  
    console.log("handleClickOnAnswer");
    if (question1Answered === false) {
        question1Answered = true;
        console.log(answer1.innerText,infoQuestion[indexQuestionary].solution)
        if(answer1.innerText === infoQuestion[indexQuestionary].solution){
            totalScore++;
            answerMessage.innerText = "You got it right! :D   ";
            answer1.style.color = "green";
        }
        else{
            answerMessage.innerText = "You got it wrong! ha ha :(  ";
            answer1.style.color = "red";
        }
        answerMessage.style.visibility = "visible";
        nextQuestion.style.visibility = "visible";

        
      }
}
function handleClickOnAnswer2(){
  
    console.log("handleClickOnAnswer");
    if (question1Answered === false) {
        question1Answered = true;
        console.log(answer2.innerText,infoQuestion[indexQuestionary].solution)
        if(answer2.innerText === infoQuestion[indexQuestionary].solution){
            totalScore++;
            totalScore.innerText = totalScore;
            answerMessage.innerText = "You got it right! :D   ";
            answer2.style.color = "green";
        }
        else{
            answerMessage.innerText = "You got it wrong! ha ha :(  ";
            answer2.style.color = "red";
        }
        answerMessage.style.visibility = "visible";
        nextQuestion.style.visibility = "visible";
        
      }
}

function handleClickOnAnswer3(){
  
    console.log("handleClickOnAnswer");
    if (question1Answered === false) {
        question1Answered = true;
        console.log(answer3.innerText,infoQuestion[indexQuestionary].solution)
        if(answer3.innerText === infoQuestion[indexQuestionary].solution){
            totalScore++;
            totalScore.innerText = totalScore;
            answerMessage.innerText = "You got it right! :D   ";
            answer3.style.color = "green";
        }
        else{
            answerMessage.innerText = "You got it wrong! ha ha :(  ";
            answer3.style.color = "red";
        }
        answerMessage.style.visibility = "visible";
        nextQuestion.style.visibility = "visible";
        
      }
}



function handleCorrectAnswer(answer) {
  console.log("handleCorrectAnswer");
  console.log(answer);
  if (question1Answered === false) {
    question1Answered = true;
    totalScore++;
    totalScore.innerText = totalScore;
    answerMessage.innerText = "You got it right! :D   ";
    list.appendChild(answerMessage);
    list.appendChild(nextQuestion);
  }
}

function handleWrongAnswers() {
  console.log("Wrong");
  if (question1Answered === false) {
    question1Answered = true;
    answerMessage.innerText = "You got it wrong! ha ha :(  ";
    list.appendChild(answerMessage);
    list.appendChild(nextQuestion);
  }
}
function resetNewQuestion(){
  answerMessage.style.visibility = "hidden";
  nextQuestion.style.visibility = "hidden";
  answer1.style.color = "rgb(185, 151, 36)";
  answer2.style.color = "rgb(185, 151, 36)";
  answer3.style.color = "rgb(185, 151, 36)";
}

function handleNextQuestion() {
  resetNewQuestion()
  question1Answered = false;
  indexQuestionary++;
  if(infoQuestion[indexQuestionary] === undefined){
    console.log(totalScore, ",---------totalScore")
    const totalScoreP = document.createElement("p"); 
    const imageFinal = document.createElement("img"); 
    let msg=""
    if(totalScore > 7){
      msg = " Well done :)"
      imageFinal.src = "https://upload.wikimedia.org/wikipedia/en/9/9f/AceVenturaFilm.PNG"
    }
    else{
      if(totalScore > 4){
       msg = " Not too bad ;-P"
       imageFinal.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ53jhIoPIDAHgI_GB_brD4DqbbZ1yvKibg&s"
    }
    else{
             msg = " uups :)"
       imageFinal.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlnbcLqzpwIUe4TCsIErJzRvkXxeyMOiH6A&s"
    }
    imageFinal.alt="Ace Ventura" 
  }
    Question.innerText = "Quiz result "+totalScore+"/10"+ msg ;
    clickAnswer1.style.visibility="hidden";
    clickAnswer2.style.visibility="hidden";
    clickAnswer3.style.visibility="hidden";
    //Question.style.visibility="hidden";
   // body.appendChild(totalScoreP);
    body.appendChild(imageFinal);
  }
  else{
  Question.innerText = infoQuestion[indexQuestionary].question;
  clickAnswer1.innerText = infoQuestion[indexQuestionary].answer1
  clickAnswer2.innerText = infoQuestion[indexQuestionary].answer2
  clickAnswer3.innerText = infoQuestion[indexQuestionary].answer3
  console.log(indexQuestionary , infoQuestion.length -1)
  if(indexQuestionary === infoQuestion.length -1){
    nextQuestion.innerText = "Finish"
  }
  }
    

  //remove the answer message and next question button
}


clickAnswer1.addEventListener("click", handleClickOnAnswer1);
clickAnswer2.addEventListener("click", handleClickOnAnswer2);
clickAnswer3.addEventListener("click", handleClickOnAnswer3);

nextQuestion.addEventListener("click", handleNextQuestion);
