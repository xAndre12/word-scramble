const input = document.querySelector(".wordinput");
const timespan = document.querySelector(".timespan");
const mixedWord = document.querySelector(".word");
const refresh = document.querySelector(".refresh");
const check = document.querySelector(".check");
const points = document.querySelector(".pointsspan")

let countdownstart = true;
let word;

const words = [
    {
        mixed: "RMA",
        correct: "mar",
    },
    {
        mixed: "INECA",
        correct: "caine",
    },
    {
        mixed: "PALTE",
        correct: "lapte",
    },
    {
        mixed: "ISANMA",
        correct: "masina",
    },
    {
        mixed: "OTTRIERCE",
        correct: "teoretic",
    },
];

const randomWord = ()=>{
    word = words[Math.floor(Math.random() * 5)];
    mixedWord.innerHTML = word.mixed;
};

input.addEventListener("click", ()=>{
    if(countdownstart){
        countdownstart = false;
        for (let index = 0; index < 30; index++) {
            setTimeout(() => {
                timespan.innerHTML = parseInt(timespan.innerHTML) - 1; 
            }, index * 1000);
        } 
    }
})

refresh.addEventListener("click", ()=>{
  randomWord();
})

window.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        if(input.value === word.correct){
            points.innerHTML = parseInt(points.innerHTML) + 1;
            randomWord();
            input.value = "";
        }
    }
})

check.addEventListener("click", () =>{
    if(input.value === word.correct){
        points.innerHTML = parseInt(points.innerHTML) + 1;
        randomWord();
        input.value = "";
    }
})

randomWord();

