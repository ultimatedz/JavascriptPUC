let numero = 127;
let counter = 0;

while(numero !== 1){
    if(numero % 2 == 0){
        numero = numero/2;
        counter++;
    }else{
        numero = (numero*3)+1;
        counter++;
    }
    
}
counter++;
console.log(counter);
