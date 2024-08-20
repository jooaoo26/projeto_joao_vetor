let vetor = [];
let tbodyValores = document.getElementById('tbody-valores');
let resultadoContagem = document.getElementById('resultado-contagem');

function adicionarValor() {
  const valor = Number(document.getElementById('valor').value);
  vetor.push(valor);

  const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
  const novalinha = tabela.insertRow();
  const celula = novalinha.insertCell();
  celula.textContent = valor;

  document.getElementById('valor').value = '';
}

function contarDois() {
  let contador = 0;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === 2) {
      contador++;
    }
  }
  resultadoContagem.textContent = `Existem ${contador} elementos iguais a 2 no vetor.`;
}
