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