function meuJoin(lista, separador = ','){
    let texto = ''
    lista.forEach(item => {
    if(item !== lista[lista.length -1]){
        texto += item + separador
    } else {
        texto += item
    }
    })
    return texto
    }

    let lista =[1,2,3,4]
    console.log(meuJoin(lista,"."));
