function viagem() {
    const precoEtanol = 5;
    const precoGasolina = 5.7;
    const consumoEtanol = 0.5;
    const consumoGasolina = 0.6; //km/litro=consumo
    const distancia = 20;
    somaEtanol = (consumoEtanol * distancia) * precoEtanol;
    somaGasolina = (consumoGasolina * distancia) * precoGasolina;
    const meuCombustivel = "Gasolina";

    if (meuCombustivel === 'Gasolina'){
        console.log("valor viagem a Gasolina:  R$"+ somaGasolina);
    } else {
        console.log("valor viagem no Etanol:  R$"+ somaEtanol);
    }
}

function main(){
     console.log('Início do programa!')
     viagem();
}

main();