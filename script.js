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
const shen = document.querySelector("#shen");
const pc = document.querySelector("#pc");
const result = document.querySelector("#pSize");

let playerSign = 0;
let pcSign = 0;
let plQula = 0;
let pcQula = 0;

reset.disabled = true;
translate2.disabled = true;


qva.addEventListener("click", qvaf);
function qvaf(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    if(translate.disabled){
        plScore.innerText = "камень";
    }
    else {
        plScore.innerText = "ქვა";
    }
    playerSign = 1;
    pcMove();
}

makrateli.addEventListener("click", makratelif);
function makratelif(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    if(translate.disabled){
        plScore.innerText = "ножницы";
    }
    else {
        plScore.innerText = "მაკრატელი";
    }
    playerSign = 2;
    pcMove();
}

bade.addEventListener("click", badef);
function badef(){
    const randomNumb = Math.floor((Math.random()*3)+1);
    if(translate.disabled){
        plScore.innerText = "бумага";
    }
    else {
        plScore.innerText = "ბადე";
    }
    playerSign = 3;
    pcMove();
}

reset.addEventListener("click", resetf);

function resetf(){
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
    plScore.innerText = "";
    pcScore.innerText = "";
}

function pcMove(){
    pcSignf();
    switch(pcSign){
        case 1:
        if(translate.disabled){
            pcScore.innerText = "камень";
        }
        else {
            pcScore.innerText = "ქვა";
        }
        break;

        case 2: 
        if(translate.disabled){
            pcScore.innerText = "ножницы";
        }
        else {
            pcScore.innerText = "მაკრატელი";
        }
        break;

        case 3:
        if(translate.disabled){
            pcScore.innerText = "бумага";
        }
        else {
            pcScore.innerText = "ბადე";
        } 
    }
     reset.disabled = false;
     shedegif();
}

function pcSignf(){
    pcSign = Math.floor((Math.random()*3)+1);
}

function shedegif(){
    if(playerSign === pcSign){
        
    }
    else if(((playerSign === 1)&&(pcSign === 2))||((playerSign === 2)&&(pcSign === 3))||((playerSign === 3)&&(pcSign === 1))){
        
        plQula++;
        qula.innerText = plQula;
    }
    else{
        
        pcQula++;
        qula2.innerText = pcQula;
    }
    disablef();
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
        if(translate.disabled){
            shedegi.innerText = "выиграл(а)";
        }
        else {
            shedegi.innerText = "მოიგე";
        } 
       
        shedegi.style.color = "green";
    }
    else {
        if(translate.disabled){
            shedegi.innerText = "проиграл(а)";
        }
        else {
            shedegi.innerText = "წააგე";
        } 
        
        shedegi.style.color = "red";
    }
}


translate.addEventListener("click", function(){
    qva.innerText = "камень";
    makrateli.innerText = "ножницы";
    bade.innerText = "бумага";
    reset.innerText = "восст.";
    shen.innerText = "У тебя: ";
    pc.innerText = "У бота: ";
    result.innerText = "Результат: "

    translate.disabled = true;
    translate2.disabled = false;

    resetf();
})

translate2.addEventListener("click", function(){
    qva.innerText = "ქვა";
    makrateli.innerText = "მაკრატელი";
    bade.innerText = "ბადე";
    reset.innerText = "აღდგენა";
    shen.innerText = "შენ: ";
    pc.innerText = "ბოტი: ";
    result.innerText = "შედეგი: ";

    translate.disabled = false;
    translate2.disabled = true;

    resetf();
})





