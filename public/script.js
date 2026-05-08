
alert("ATTENTION: ce site consiste en un amusement pour collégiens. Evitez d'entrer vos vraies données personnelles. Ce site n'utilise pas de cookies ")


document.getElementById("bn").onclick = fn;

function fn() {
    window.location.href = "cavnora/index.html";
}

document.getElementById("bb").onclick = fb;

function fb() {
    window.location.href = "cavbastion/index.html";
}


document.getElementById("bl").onclick = fl;

function fl() {
    window.location.href = "cavl'angeaoût/index.html";
}


document.getElementById("be").onclick = fe;

function fe() {
    window.location.href = "caveve/index.html";
}

document.getElementById("ba").onclick = fa;
function fa() {
    window.location.href = "cavaigle/indexs.html";
}

document.getElementById("bf").onclick = ff;
function ff() {
    window.location.href = "cavfaritas/indexs.html";
}

document.getElementById("bcaveur").onclick = imcav; 
function imcav(){
    window.location.href = "caveurs/index.html";
}

function ju(){
    window.location.href = "cavju/index.html"
}


var lograna = document.getElementById("lograna");
var flygana = document.getElementById("flygana");


async function run(){
    for (;;){
    await pub("Lograna: Les cookies de Référence", lograna);
    await pub("Ils ont même conquit les gentlemen", lograna);
    await pub("Le combo ultime crousti-moelleux-fondant", lograna);
    }
}
async function run1(){
    for (;;){
    await pub("Voyagez €co avec Flygana", flygana);
    await pub("Voyage en deuxième classe Paris-Pékin à partir de 1806 €", flygana);
    await pub("Flygana : volez libre ! ", flygana);
    }
}


async function pub(txt, marque){
    marque.innerHTML = txt;
    await new Promise(fct => setTimeout(fct, 5000));
}

run1();
run();



document.getElementById("flyganaL").addEventListener("click" , function(){
    window.location.href = "https://flygana.onrender.com";
});