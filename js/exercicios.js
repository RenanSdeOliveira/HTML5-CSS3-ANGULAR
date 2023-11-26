class Carro{
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDistancia(distancia, precoCombustivel){
        return this.gastoMedioPorKM * distancia * precoCombustivel;
    }

}

const carro = new Carro('Toyota', 'Prata', 1/11);
console.log(carro);

console.log(carro.calcularGastoDistancia(70, 6));