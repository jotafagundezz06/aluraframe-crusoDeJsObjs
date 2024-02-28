class Negociacoes {
    // Define uma classe chamada Negociacoes
    constructor(data, quantidade, valor) {
        // Define o método especial constructor(), que é chamado automaticamente quando um objeto desta classe é instanciado
        this._data = new Date(data.getTime());
        // Cria uma propriedade chamada _data e atribui a ela um novo objeto Date() baseado na data fornecida
        this._quantidade = quantidade;
        // Cria uma propriedade chamada _quantidade e atribui o valor passado como argumento
        this._valor = valor;
        // Cria uma propriedade chamada _valor e atribui o valor passado como argumento
        // NOTA: Há um erro de sintaxe aqui. A vírgula deve ser substituída por um ponto para representar corretamente um número de ponto flutuante.
        Object.freeze(this);
        // Congela o objeto, tornando-o imutável (não permite alterações em suas propriedades)
    }

    get volume(){
        // Define um método getter chamado volume
        return this._quantidade * this._valor;
        // Retorna o volume da negociação (quantidade * valor)
    }

    get data() {
        // Define um método getter chamado data
        return new Date(this._data.getTime());
        // Retorna uma nova instância de Date() com o valor da data armazenada em _data, garantindo imutabilidade
    }
    
    get quantidade() {
        // Define um método getter chamado quantidade
        return this._quantidade;
        // Retorna o valor armazenado em _quantidade
    }
    
    get valor() {
        // Define um método getter chamado valor
        return this._valor;
        // Retorna o valor armazenado em _valor
    }
}
