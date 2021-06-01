const btnStartTest = document.getElementsByClassName("jsStartTest");
const homePages = document.getElementsByClassName("homeWrap");
const testPages = document.getElementsByClassName("jsQuestionWrap");
const btnAnswer = document.querySelector(".jsAnswer");

let currentQuestion = 0;

console.log(btnStartTest)

const handleQuestionPage = (event) => {
    testPages[currentQuestion].classList.remove("on");
    testPages[currentQuestion+1].classList.add("on");

    currentQuestion = currentQuestion+1;
    console.log(currentQuestion);
}

const handleHomepage = (event) => {
  homePages[0].classList.remove("on");
  testPages[0].classList.add("on");
  
  console.log(testPages[0].classList);
  console.log(homePages[0].classList);
}

if(btnAnswer){
    btnAnswer.addEventListener("click", handleQuestionPage);
    console.log(this.EventTarget);
}

if(btnStartTest){
  btnStartTest[0].addEventListener("click", handleHomepage);
}