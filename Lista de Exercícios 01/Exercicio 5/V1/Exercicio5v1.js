let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let nota3 = document.getElementById('nota3');
let media = document.getElementById('media');
let sendButton = document.querySelector('button');

// Verifica se o valor inserido é um número aceito
nota1.addEventListener('input', function() {
  if (nota1.value < 0 || nota1.value > 100) {
    nota1.value = '';
    nota1.placeholder = 'Insira um número entre 0 e 100';
  }
});

nota2.addEventListener('input', function() {
  if (nota2.value < 0 || nota2.value > 100) {
    nota2.value = '';
    nota2.placeholder = 'Insira um número entre 0 e 100';
  }
});

nota3.addEventListener('input', function() {
  if (nota3.value < 0 || nota3.value > 100) {
    nota3.value = '';
    nota3.placeholder = 'Insira um número entre 0 e 100';
  }
});

// Faz o sistema para calcular a média
sendButton.addEventListener('click', function() {
  if(nota1.value && nota2.value && nota3.value) {
    let sum = Number(nota1.value) + Number(nota2.value) + Number(nota3.value);
    let average = (sum / 3).toFixed(2);
    media.textContent = average;
    if(average > 60) {
      media.style.textDecoration = 'underline solid green';
    } else {
      media.style.textDecoration = 'underline solid red';
    }
  } else {
    if(!nota1.value) {
      nota1.style.backgroundColor = 'rgb(255, 192, 203)';
      nota1.addEventListener('input', function() {
        nota1.style.backgroundColor = '';
      });
    }
    if(!nota2.value) {
      nota2.style.backgroundColor = 'rgb(255, 192, 203)';
      nota2.addEventListener('input', function() {
        nota2.style.backgroundColor = '';
      });
    }
    if(!nota3.value) {
      nota3.style.backgroundColor = 'rgb(255, 192, 203)';
      nota3.addEventListener('input', function() {
        nota3.style.backgroundColor = '';
      });
    }
  }
});
