const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const resultSpan = document.getElementById("result");

//Função para somar
function add(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)){
        const result = num1 + num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

//Função para subtrair
function subtrair(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)){
        const result = num1 - num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

//Função para multiplicar
function multiplicar(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)){
        const result = num1 * num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

//Função para dividir
function dividir(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)){
        const result = num1/num2;
        resultSpan.textContent = result;
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

//Adcionar listener de evento dos botões
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtrair);
multiplyButton.addEventListener("click", multiplicar);
divideButton.addEventListener("click", dividir);