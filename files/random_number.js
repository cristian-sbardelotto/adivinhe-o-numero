let numeroFormulario = document.querySelector('#numform');
let result = document.querySelector('.result');
let button = document.querySelector('input.btn');
let numeroAleatorio = Math.floor(Math.random() * 100);

// COMANDO PARA NÃO PERMITIR QUE O NÚMERO SEJA IGUAL A 0
if (numeroAleatorio == 0) {
    numeroAleatorio = numeroAleatorio + Math.floor(Math.random() * 99); 
}

// COMANDO SE APERTAR ENTER
function apertar(e) {
    if (e.keyCode === 13) {
        let number = Number(numeroFormulario.value);
        estaCerto();
        if (number > 100 || number < 0 || number == 0) {
            alert("[ERRO] Número inválido!");
            result.innerHTML = 'Boa sorte...'
        }         
    } else {
        return;
    }
}

// COMANDO SE CLICAR NO BOTÃO
function clicar() {
    let number = Number(numeroFormulario.value);
    estaCerto();
    if (number > 100 || number < 0 || number == 0) {
        alert("[ERRO] Número inválido!");
        result.innerHTML = 'Boa sorte...'
    } 
}


// FUNÇÃO PARA VERIFICAR SE O PLAYER ACERTOU O NÚMERO
const estaCerto = () => {
    let number = Number(numeroFormulario.value);
    if (number == numeroAleatorio) {
        alert("Parabéns, você acertou o número! \nA página será recarregada para tentar novamente!");
        document.location.reload();
    } else {
        numeroFormulario.value = ''
        numeroFormulario.focus();
        if (numeroAleatorio > number) {
            result.innerHTML = 'O número é maior!';
        } else {
            result.innerHTML = 'O número é menor!';
        }
    }
}

console.log(`Parabéns, você achou o Console.`);
console.log(`Ha Ha Ha!`);
console.log(`O número é ${numeroAleatorio}`);


