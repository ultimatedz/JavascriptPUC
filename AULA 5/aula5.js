const h1 = document.querySelector('h1');
h1.style.color = 'rgb(1,255,0)';
const h1s = document.querySelectorAll('h1');

for (const h of h1s){
    h.style.backgroundColor= 'red';
    h.innerText += ' ahhh';
}



const itens = document.querySelector('.itens');
const newItem = document.createElement('li');
newItem.innerText= 'item novo';
newItem.id = 'item3';


itens.appendChild(newItem);
newItem.classList.add('item3');




const item1 = document.querySelector('#item1');

