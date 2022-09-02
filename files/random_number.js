let numberForm = document.querySelector('#numform');
let result = document.querySelector('.result');
let button = document.querySelector('input.btn');

let randomNum = Math.floor(Math.random() * 100);
if (randomNum == 0) { randomNum = randomNum + Math.floor(Math.random() * 99); }

console.log(`Parabéns, você achou o Console.`);
console.log(`Ha Ha Ha!`);
console.log(`O número é ${randomNum}`);

// PARA CARREGAR OS ELEMENTOS APÓS A ANIMAÇÃO

function carregar() {
    document.querySelector('.content').style.display = "block";
    document.querySelector('p').style.display = 'block';
    document.querySelector(".line").style.display = 'block';
    numberForm.focus();
}

// SE APERTAR ENTER

function apertar(e) {
    if (e.keyCode === 13) {
        let number = Number(numberForm.value);
        isRight();
        if (number > 100 || number < 0) {
            alert("[ERRO] Número inválido!");
            result.innerHTML = 'Boa sorte...'
        }         
    } else {
        return;
    }
}

// SE CLICAR NO BOTÃO

function clicar() {
    let number = Number(numberForm.value);
    isRight();
    if (number > 100 || number < 0) {
        alert("[ERRO] Número inválido!");
        result.innerHTML = 'Boa sorte...'
    } 
}


// FUNCTION PARA VERIFICAR SE O PLAYER ACERTOU O NÚMERO

const isRight = () => {
    let number = Number(numberForm.value);
    if (number == randomNum) {
        alert("Parabéns, você acertou o número! \nA página será recarregada para tentar novamente!");
        document.location.reload();
    } else {
        numberForm.value = ''
        numberForm.focus();
        if (randomNum > number) {
            result.innerHTML = 'O número é maior!';
        } else {
            result.innerHTML = 'O número é menor!';
        }
    }
}

