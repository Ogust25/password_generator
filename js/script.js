const range = document.querySelector("#range");
const rangeNbr = document.querySelector('#rangeNbr');
const checkUppercase = document.querySelector('#uppercase');
const checkLowercase = document.querySelector('#lowercase');
const checkNumbers = document.querySelector('#numbers');
const checkSpeCharacters = document.querySelector('#speCharacters');
const btnGenerate = document.querySelector('#generate');
const inputPassword = document.querySelector('#inputPassword');
const succesMsg = document.querySelector('#succesMsg');
const copy = document.querySelector("#copy");

let length = 12;
rangeNbr.firstChild.nodeValue = range.value;
range.oninput = function() {
    /* Input range color */
    let value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #FEF9ED 0%, #FDD881 ' + value + '%, #3D3A49 ' + value + '%, #3D3A49 100%)';

    /* Range value */
    rangeNbr.firstChild.nodeValue = range.value;
    length = range.value;
};


/* 4 checkboxs */
let uppercase = 0;
checkUppercase.onchange = function() {
    if(checkUppercase.checked){
        uppercase = 1;
    }else{
        uppercase = 0;
    }
};

let lowercase = 0;
checkLowercase.onchange = function() {
    if(checkLowercase.checked){
        lowercase = 1;
    }else{
        lowercase = 0;
    }
};

let numbers = 0;
checkNumbers.onchange = function() {
    if(checkNumbers.checked){
        numbers = 1;
    }else{
        numbers = 0;
    }
};

let speCharacters = 0;
checkSpeCharacters.onchange = function() {
    if(checkSpeCharacters.checked){
        speCharacters = 1;
    }else{
        speCharacters = 0;
    }
};

/* Generate password */
let password = "";
btnGenerate.addEventListener("click", function(){
    password = "";
    let codeGen = "";
    if (uppercase === 1) {
        codeGen += 1;
    }
    if (lowercase === 1) {
        codeGen += 2;
    }
    if (numbers === 1) {
        codeGen += 3;
    }
    if (speCharacters === 1) {
        codeGen += 4;
    }

    let code = "";
    for (let i = 0; i < length; i++) {
        code += random(codeGen);
    }

    for (let i = 0; i < length; i++) {
        if (code[i] == 1){
            password += randomUpper();
        }else if (code[i] == 2) {
            password += randomLower();
        }else if (code[i] == 3) {
            password += randomNumber();
        }else if (code[i] == 4) {
            password += randomSpeChar();
        }
    }

    inputPassword.value = password;
})


/* Clipboard */
copy.addEventListener("click", function(){
    navigator.clipboard.writeText(password);
    succesMsg.classList.remove('invisible');
    succesMsg.classList.add('visible');
})

/* Random char/num */
function randomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
}
function randomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
}
function randomNumber() {
    const num = "0123456789";
    return num[Math.floor(Math.random() * num.length)];
}
function randomSpeChar() {
    const speChar = "!#$%&()*+,-.<>[]/:;=?@\^_|~";
    return speChar[Math.floor(Math.random() * speChar.length)];
}
function random(codeGen) {
    const res = codeGen;
    return res[Math.floor(Math.random() * res.length)];
}