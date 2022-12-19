const adviceSection = document.getElementById('adviceSection')
const advice = document.getElementById('advice')
const adviceId = document.getElementById('adviceId')
const button = document.getElementById('button');

button.addEventListener('click', async ()=>{
    try{
    adviceSection.classList.remove('animation');
    const url ="https://api.adviceslip.com/advice";
    const data = await fetch (url);
    const res = await data.json();
    adviceId.innerHTML = res.slip.id;
    advice.innerHTML = res.slip.advice;
    adviceSection.classList.add('animation');
}
catch{
    console.log("Sorry")
}
})