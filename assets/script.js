const display = document.querySelector("input")

function digitar (valor) {
    //display.value = display.value + valor
    display.value += valor
}

function limpar () {
    display.value = ""
}

function calcular () {
    //eval() transforma strig em algarimo javascript
    display.value = eval(display.value)
}
