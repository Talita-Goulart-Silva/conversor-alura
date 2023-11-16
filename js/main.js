var nome = prompt("Por favor, insira seu nome:");
var valor = prompt(
  "Por favor, insira o valor que deseja converter, do dólar para o Real:"
);

var valor;
var cotacaoDoDolar = 4.87;

var valorEmReal = valor * cotacaoDoDolar;

valorEmReal = valorEmReal.toFixed(2);

alert(
  "Olá " +
    nome +
    ". Aqui está o valor que você digitou convertido em Real" +
    " R$ " +
    valorEmReal +
    ". "
);

var valorEmDoge = prompt(
  "Por favor, insira o valor que deseja converter, do Real para o DOGE:"
);

var valorEmDoge;
var cotacaoDoDoge = 0.38;

var valorEmReal = valorEmDoge * cotacaoDoDoge;

valorEmReal = valorEmReal.toFixed(2);

alert(
  " Aqui está o valor que você digitou convertido na criptomoeda DOGE" +
    " R$ " +
    valorEmReal +
    " ."
);

/*

var anosLuz = prompt(
  "Por favor, insira o valor que deseja converter, de Anos Luz para metros:"
);

var anosLuz;
var cotacaoMetros = 9.46;

var valorEmMetros = anosLuz * cotacaoMetros;

valorEmMetros = valorEmMetros.toFixed(2);

alert(
  " Aqui está o valor que você digitou convertido em metros " +
    +valorEmReal +
    " ."
); */
