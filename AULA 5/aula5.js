const h1 = document.querySelector('h1');
h1.style.color = 'rgb(1,255,0)';
const h1s = document.querySelectorAll('h1');

for (const h of h1s){
    h.style.backgroundColor= 'red';
    h.innerText += ' ahhh';
}



const itens = document.querySelector('.itens');

//document.getElementsByClassName('itens');

const newItem = document.createElement('li');
newItem.innerText= 'item novo';
newItem.id = 'item3';
newItem.classList.add('uls');
newItem.addEventListener('mouseenter', function(){
    console.log('Entered');
});



itens.appendChild(newItem);
newItem.classList.add('item3');




const item1 = document.querySelector('#item1');

const input = document.querySelector('input');

/* input.oninput = function (e){
    h1.innerText = input.value;
}


input.oninput = (function(e)){
    newItem.innertext = input.value;
}

*/

input.addEventListener('input', function(e){
    h1.innertext = input.value;
})

input.addEventListener ('input',  function(e){
    newItem.innertext = input.value;
})