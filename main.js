
var input = document.getElementById('input');
var btns = document.querySelectorAll('.btn');
var btnClear = document.getElementById('btnclear');
var btnResult = document.getElementById('btnresult');

// Asignar event listener a todos los botones numéricos
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var valorActual = input.innerHTML;
    var nuevoValor = btn.innerHTML;
    input.innerHTML = valorActual + nuevoValor;
  });
});

// Event listener para el botón de limpiar
btnClear.addEventListener('click', function() {
  input.innerHTML = '';
});

// Event listener para el botón de resultado
btnResult.addEventListener('click', function() {
  var expresion = input.innerHTML;
  var resultado = eval(expresion);
  input.innerHTML = resultado;
});
