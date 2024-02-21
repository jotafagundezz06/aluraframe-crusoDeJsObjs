var campos = [
    document.querySelector('#data'),         // Seleciona o elemento HTML com o ID "data" e o armazena na primeira posição do array "campos"
    document.querySelector('#quantidade'),   // Seleciona o elemento HTML com o ID "quantidade" e o armazena na segunda posição do array "campos"
    document.querySelector('#valor')        // Seleciona o elemento HTML com o ID "valor" e o armazena na terceira posição do array "campos"
];

var tbody = document.querySelector('table tbody');  // Seleciona o elemento HTML <tbody> dentro do elemento <table> e o armazena na variável "tbody"

document.querySelector('.form').addEventListener('submit', function(event) {  // Seleciona o elemento HTML com a classe "form" e adiciona um listener para o evento "submit"
    event.preventDefault();  // Previne o comportamento padrão de submissão do formulário

    var tr = document.createElement('tr');  // Cria um novo elemento HTML <tr> e o armazena na variável "tr"

    campos.forEach(function(campo) {  // Itera sobre cada elemento no array "campos"
        var td = document.createElement('td');  // Cria um novo elemento HTML <td> e o armazena na variável "td"
        td.textContent = campo.value;  // Define o conteúdo de texto do elemento "td" como o valor do campo atual
        tr.appendChild(td);  // Adiciona o elemento "td" como um filho do elemento "tr"
    });

    var tdVolume = document.createElement('td');  // Cria um novo elemento HTML <td> e o armazena na variável "tdVolume"
    tdVolume.textContent = campos[1].value * campos[2].value;  // Define o conteúdo de texto do elemento "tdVolume" como o resultado da multiplicação dos valores dos campos quantidade e valor
    tr.appendChild(tdVolume);  // Adiciona o elemento "tdVolume" como um filho do elemento "tr"

    tbody.appendChild(tr);  // Adiciona o elemento "tr" como um filho do elemento "tbody"

    campos[0].value = '';  // Define o valor do primeiro campo como uma string vazia
    campos[1].value = 1;   // Define o valor do segundo campo como 1
    campos[2].value = 0;   // Define o valor do terceiro campo como 0

    campos[0].focus();   // Dá foco de entrada ao primeiro campo
});
