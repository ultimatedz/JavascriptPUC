let list = [1,2,3,4,5];




function maior(lista){
    let numero = 0
    lista.forEach(item => {
    if(Number(item) > numero)
    numero = item
    })
    return numero
    }


    console.log(maior(list));


