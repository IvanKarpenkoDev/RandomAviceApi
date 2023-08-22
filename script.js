//https://api.adviceslip.com

const btn = document.querySelector("button"),
      advice = document.querySelector("h2"),
      idAdvice = document.querySelector("p");


btn.addEventListener('click', () =>{
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.adviceslip.com/advice");
    request.setRequestHeader("Accept", "application/json");
    request.send();
    request.addEventListener("load", () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            console.log(data);
            idAdvice.innerHTML =  `ADVICE #${data.slip.id}`;
            advice.innerHTML = `"${data.slip.advice}"`;

        }
    });
});


