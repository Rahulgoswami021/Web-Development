quizData = [
    {
        question: 'Who is pm of india ?',
        a: 'Nrendra Modi',
        b: 'Adityanath Yogi',
        c: 'Dr. Manmohan',
        d: 'None of Above',
        correct: 'a'
    }, {
        question: 'What is capital of india ?',
        a: 'Bangluru',
        b: 'Ayodhya',
        c: 'Delhi',
        d: 'Jaipur',
        correct: 'c'
    },
    {
        question: 'Full form of ISRO is',
        a: 'India Space And Research Orgnigation',
        b: 'International Space And Research Orgnigation',
        c: 'Indian Space Research Orgnigation',
        d: 'None of Above',
        correct: 'c'
    },

    {
        question: 'Who is The riches person of india ?',
        a: 'Mukesh Ambani',
        b: 'DhiruBhai Ambani',
        c: 'Ratan TaTa',
        d: 'Elon Musk',
        correct: 'a'
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]
const question = document.querySelector('#question');
const answerEls = document.querySelectorAll(".answer");
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#btn');
console.log(question, a_text, b_text, c_text, d_text)
currentQuiz = 0;
currentScore = 0;

loadQuiz();

function loadQuiz() {

    currenQuizData = quizData[currentQuiz];
    question.textContent = currenQuizData.question;
    a_text.textContent = currenQuizData.a;
    b_text.textContent = currenQuizData.b;
    c_text.textContent = currenQuizData.c;
    d_text.textContent = currenQuizData.d;

}
function getAns(){
    let ans = undefined;
    answerEls.forEach(answerEls  => {
       if(answerEls .checked){
           answer = answerEls .id;
       } 
    });
    return answer;
}
function deSelect(){
    answerEls.forEach(answerEl=>{
        answerEl.checked=false;
    })
}

submitBtn.addEventListener('click', (e) => {
    let answer = getAns();
    console.log(answer)
    if(answer===quizData[currentQuiz].correct){
        currentScore++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
        deSelect()
    }
    else {
        const scoreCard =document.querySelector('.score-card');
        console.log(currentScore);
        scoreCard.innerHTML=`<h3>Your Score Is ${currentScore} out of ${ quizData.length}</h3>`;

    }
    
})

