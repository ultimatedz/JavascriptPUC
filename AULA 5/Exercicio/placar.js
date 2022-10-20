const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const button3 = document.querySelector('#reset');
const player1 = document.querySelector('#firstValue');
const player2 = document.querySelector('#SecondValue');
const seletorMax = document.querySelector('#seletormax')
let contador = 1;
let contador2 =1;
let max= 1




selectElement = document.getElementById('score');

for (i=1;i<=100;i++){
    selectElement.add(new Option(i));
}



function CheckerMax(){
    max = document.getElementById('score').selectedIndex+1;
    console.log(max)
    return max;
}



seletormax.onclick= CheckerMax;




button1.onclick = function(){
    player1.innerHTML = contador
    contador++;
    if (contador > CheckerMax()){
        alert("Jogador 1 venceu");
        contador = 1;
        player1.innerHTML= 0;
    }
}

button2.onclick = function(){
    player2.innerHTML= contador2
    contador2 ++;
    if (contador2 > CheckerMax()){
        contador = 1;
        player2.innerHTML=0;
        alert("Jogador 2 venceu");
    }
}


button3.onclick = function(){
    player1.innerHTML = 0;
    player2.innerHTML = 0;
    contador=1;
    contador2=1;
    max = 1;
    console.log(max);
}


