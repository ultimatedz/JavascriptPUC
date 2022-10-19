const lista = [1,2,3,4,5,-5];
let soma = 0;
for (i=0; i<lista.length; i++){
    if (lista[i] > 0){
        console.log(`${lista[i]}`)
    }
    

    soma += lista[i];

}

let media = soma / lista.length;
console.log(`A média da lista é: ${media}`);
