const { gets, print } = require('./auxiliar');
print(gets());

const numerosSorteados = [];

for (let i=0; i<5; i++){
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}
let maiorvalor = 0;
for (let i=0; i<numerosSorteados.length; i++){
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado>maiorvalor){
        maiorvalor = numerosSorteado;
    }
}

print(maiorvalor);