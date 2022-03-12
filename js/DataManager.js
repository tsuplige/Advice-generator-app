const source = "https://api.adviceslip.com/advice" ;

ShowAdvice();
var btn = document.getElementById('randomis');
this.btn.addEventListener('click', location.reload)

let compt = 0

 async function getAllData(){
    let answer = await fetch(source);
    let data = await answer.json();
    return data;
}

async function ShowAdvice(){
    let data = await getAllData();
    document.getElementById('advice-id').textContent = "ADVICE #" + data.slip.id
    document.getElementById('advice').textContent = data.slip.advice
    console.log('test')
}

