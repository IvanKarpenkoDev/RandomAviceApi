//https://api.adviceslip.com

const btn = document.querySelector("button"),
      advice = document.querySelector("h2"),
      idAdvice = document.querySelector("p");

getAdvice();

btn.addEventListener('click', getAdvice);
document.addEventListener('keydown', (e) => {
    if (e.code === "Enter") { 
        getAdvice();
    }
});


function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        idAdvice.innerHTML =  `ADVICE #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
    });    
}
