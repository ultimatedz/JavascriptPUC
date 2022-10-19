let peso = 90;
let altura = 1.80;
let obeso;
let imc;


imc = (peso / (altura **2)).toFixed(2);

if( imc >= 30){
    obeso=true;
    
}
console.log(`O valor do IMC para o peso de ${peso} quilos e ${altura} metros é de ${imc}`);
