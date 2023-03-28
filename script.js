const qva = document.querySelector("#qva");
const makrateli = document.querySelector("#makrateli");
const bade = document.querySelector("#bade");
const plScore = document.querySelector("#plScore");
const pcScore = document.querySelector("#pcScore");
const shedegi = document.querySelector("#shedegi");
const qula = document.querySelector("#qula");
const qula2 = document.querySelector("#qula2");
const minmax = document.querySelector("#minmax");
const reset = document.querySelector("#reset");
const translate = document.querySelector("#translateRU");
const translate2 = document.querySelector("#translateGE");

let playerSign = 0;
let pcSign = 0;
let plQula = 0;
let pcQula = 0;

reset.disabled = true;
translate2.disabled = true;


qva.addEventListener("click", qvaf);
function qvaf(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    plScore.innerText = "ქვა/камень";
    playerSign = 1;
    pcMove();
}

makrateli.addEventListener("click", makratelif);
function makratelif(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    plScore.innerText = "მაკრატელი/ножницы";
    playerSign = 2;
    pcMove();
}

bade.addEventListener("click", badef);
function badef(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    plScore.innerText = "ბადე/бумага";
    playerSign = 3;
    pcMove();
}

reset.addEventListener("click", function(){
    plQula = 0;
    pcQula = 0;
    qula.innerText = "0";
    qula2.innerText = "0";
    shedegi.innerText = "";
    minmax.value = 3;
    qva.disabled = false;
    makrateli.disabled = false;
    bade.disabled = false;
    reset.disabled = true;
})

function pcMove(){
    pcSignf();
    switch(pcSign){
        case 1: pcScore.innerText = "ქვა/камень";
        break;
        case 2: pcScore.innerText = "მაკრატელი/ножницы";
        break;
        case 3: pcScore.innerText = "ბადე/бумага"; 
    }
     reset.disabled = false;
     shedegif();
     disablef();
}

function shedegif(){
    if(playerSign===pcSign){
        
    }
    else if(((playerSign === 1)&&(pcSign === 2))||((playerSign === 2)&&(pcSign === 3))||((playerSign === 3)&&(pcSign === 1))){
        
        plQula++;
        qula.innerText = plQula;
    }
    else{
        
        pcQula++;
        qula2.innerText = pcQula;
    }
}

function pcSignf(){
    pcSign = Math.floor((Math.random()*3)+1);
}

function disablef(){
    if((plQula == minmax.value)||(pcQula == minmax.value)){
        qva.disabled = true;
        makrateli.disabled = true;
        bade.disabled = true;
        reset.disabled = false;
        whoWins();
    }
}

function whoWins(){
    if(plQula > pcQula){
        shedegi.innerText = "მოიგე/выиграл";
        shedegi.style.color = "green";
    }
    else {
        shedegi.innerText = "წააგე/проиграл";
        shedegi.style.color = "red";
    }
}


translate.addEventListener("click", function(){
    qva.innerText = "камень";
    makrateli.innerText = "ножницы";
    bade.innerText = "бумага";
    reset.innerText = "восст.";
    translate.disabled = true;
    translate2.disabled = false;
})

translate2.addEventListener("click", function(){
    qva.innerText = "ქვა";
    makrateli.innerText = "მაკრატელი";
    bade.innerText = "ბადე";
    reset.innerText = "Reset";
    translate.disabled = false;
    translate2.disabled = true;
})





