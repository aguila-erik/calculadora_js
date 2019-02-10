
var input = document.getElementById('input');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn0 = document.getElementById('btn0');
var btndot = document.getElementById('btndot');

btn1.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "1";
    input.innerHTML = valorActual;
    
});
btn2.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "2";
    input.innerHTML = valorActual;
});
btn3.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "3";
    input.innerHTML = valorActual;
});
btn4.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "4";
    input.innerHTML = valorActual;
});
btn5.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "5";
    input.innerHTML = valorActual;
});
btn6.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "6";
    input.innerHTML = valorActual;
});
btn7.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "7";
    input.innerHTML = valorActual;
});
btn8.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "8";
    input.innerHTML = valorActual;
});
btn9.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "9";
    input.innerHTML = valorActual;
});
btn0.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + "0";
    input.innerHTML = valorActual;
});
btndot.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    valorActual = valorActual + ".";
    input.innerHTML = valorActual;
});


var add = document.getElementById('add');
var rest = document.getElementById('rest');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var result = document.getElementById('btnresult');
var clear = document.getElementById('btnclear');

var valor , valor2 , operador;

add.addEventListener('click', function() {
    valor1 = Number(input.innerHTML);
    operador = 'add';
    input.innerHTML = '';
});

rest.addEventListener('click', function() {
    valor1 = Number(input.innerHTML);
    operador = 'rest';
    input.innerHTML = '';
});

multiply.addEventListener('click', function() {
    valor1 = Number(input.innerHTML);
    operador = 'multiply';
    input.innerHTML = '';
});

divide.addEventListener('click', function() {
    valor1 = Number(input.innerHTML);
    operador = 'divide';
    input.innerHTML = '';
});

result.addEventListener('click', function() {
    valor2 = Number(input.innerHTML);
    var resultado = 0;
    if (operador === 'add') {
        resultado = valor1 + valor2;
    } else if (operador === 'rest') {
        resultado = valor1 - valor2;
    } else if (operador === 'multiply') {
        resultado = valor1 * valor2;
    } else if (operador === 'divide') {
        resultado = valor1 / valor2;
    }
    input.innerHTML = resultado;
})

clear.addEventListener('click', function() {
        var resultado = "";
    input.innerHTML = resultado;
})
