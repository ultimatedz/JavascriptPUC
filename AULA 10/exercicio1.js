let contador = 5;

const timer = setInterval(() => {
    console.log("PUCPR");
    contador--;
    if(contador<=0){
        clearInterval(timer);
    }
}, (500));