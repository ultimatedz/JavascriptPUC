function justDate(dia){

    dia.setHours(0);
    dia.setMinutes(0);
    dia.setSeconds(0);
    dia.setMilliseconds(0);
    console.log(dia.toLocaleString('pt-BR'));


}



let dia = new Date;
justDate(dia);