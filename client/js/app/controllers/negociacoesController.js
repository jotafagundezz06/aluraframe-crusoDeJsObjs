class NegociacoesController {
    // Define a classe NegociacoesController
    constructor() {
        // Define o método especial constructor(), que é chamado automaticamente quando um objeto desta classe é instanciado
        let $ = document.querySelector.bind(document);
        // Define uma variável local $ que armazena uma referência para a função querySelector do documento
        this._inputData = $('#data');
        // Cria uma propriedade chamada _inputData e atribui a ela uma referência ao elemento HTML com o id 'data'
        this._inputQuantidade =  $('#quantidade');
        // Cria uma propriedade chamada _inputQuantidade e atribui a ela uma referência ao elemento HTML com o id 'quantidade'
        this.__inputValor = $('#valor');
        // Cria uma propriedade chamada __inputValor e atribui a ela uma referência ao elemento HTML com o id 'valor'
        // NOTA: Há um erro de digitação aqui, a propriedade deveria ser chamada _inputValor em vez de __inputValor
    }

    adiciona(event) {
        // Define um método chamado adiciona que será chamado quando o formulário for submetido
        event.preventDefault();
        // Previne o comportamento padrão do formulário (evita que a página seja recarregada)

        let data = new Date(this._inputData.value.split('-'));
        // Cria uma variável data que armazena um novo objeto Date() com a data fornecida pelo input, convertendo a string em um array com o método split('-')
        console.log(data);
        // Imprime a data no console
    }
}
