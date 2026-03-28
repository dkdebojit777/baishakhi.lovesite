function handleYesClick(){
    alert("Yay, i know , i love you singer❤️");
}

function handleNoClick(){
    alert("Why no singer , am i bad ?😭");
}

function toggleMusic(){
    let music = document.getElementById("bg-music");

    if(music.muted){
        music.muted = false;
        music.play();
    }else{
        music.muted = true;
    }
}
function handleYesClick(){
    window.location.href = "yes.html";
}

function handleNoClick(){
    window.location.href = "no.html";
}
let votes = {
    Darjeeling: 0,
    Digha: 0,
    Goa: 0,
    Kolkata: 0,
    Sikkim: 0
};

let voted = false;

function vote(place){

    if(voted){
        alert("You already voted 😏");
        return;
    }

    votes[place]++;
    voted = true;

    updateUI();
}

function updateUI(){

    let total = 0;

    for(let place in votes){
        total += votes[place];
    }

    for(let place in votes){

        let percent = ((votes[place]/total)*100).toFixed(0);

        let bar = document.getElementById(place);

        bar.style.width = percent + "%";
        bar.innerHTML = place + " " + percent + "%";
    }

    // disable all buttons
    let buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.disabled = true);
}
document.querySelectorAll(".dates div").forEach(day=>{
    day.addEventListener("click", ()=>{
        alert("You selected: " + day.innerText);
    });
});