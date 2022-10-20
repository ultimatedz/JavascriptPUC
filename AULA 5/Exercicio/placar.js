const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const button3 = document.querySelector('#reset');
const player1 = document.querySelector('#firstValue');
const player2 = document.querySelector('#SecondValue');
let contador = 1;
let contador2 =1;



button1.onclick = function(){
    player1.innerHTML = contador
    contador++;
}

button2.onclick = function(){
    player2.innerHTML= contador2
    contador2 ++;
}


button3.onclick = function(){
    player1.innerHTML = 0;
    player2.innerHTML = 0;
    contador=1;
    contador2=1;
}


for (i = 0; i < 99; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}


const selecao = document.querySelector('#div-direita');


const newItem = document.createElement('li');
selecao.appendChild(newItem)



