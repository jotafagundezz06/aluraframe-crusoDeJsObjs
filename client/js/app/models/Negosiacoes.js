class negosiacoes {
    // Define uma classe chamada negosiacoes
    constructor(data, quantidade, valor) {
        // Define o método especial constructor(), que é chamado automaticamente quando um objeto desta classe é instanciado
        this._data = data;
        // Cria uma propriedade chamada data e atribui a ela um novo objeto Date(), que representa a data e hora atuais
        this._quantidade = quantidade ;
        // Cria uma propriedade chamada quantidade e atribui o valor inicial de 1 a ela
        this._valor = valor ;
        // Cria uma propriedade chamada valor e atribui o valor inicial de 0 a ela (presumo que o valor correto seja 0.0 em vez de 0,0)
        // NOTA: No entanto, há um erro de sintaxe aqui. A vírgula deve ser substituída por um ponto para representar corretamente um número de ponto flutuante.
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}

