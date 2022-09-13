

function currentTime(time_remain) {
  document.getElementById("time-display").innerText = time_remain; 
  let t = setTimeout(function() {
      currentTime(time_remain-1)
    }, 1000);
}

questionList = [
  {
    question : "What is your brother's name? ",
    answer: ["Charles", "William", "Tom", "Joan"]
  },
  {
    question : "What is your school? ",
    answer: ["T", "S", "H", "S"]
  },
];

function updateQuestion(Idx) {
  question = document.getElementById("question");
  answer = document.getElementsByClassName("answer");
  question.innerHTML = questionList[Idx].question;
  for (var i = 0; i < 4; i++)
  {
    answer[i].innerHTML = questionList[Idx].answer[i];
  }
}

idx = 0;
function init() {
  currentTime(60);
  updateQuestion(idx);
  nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", () => {
    updateQuestion(idx+1);
  }) 
}

init();