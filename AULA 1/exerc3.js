let chico = 1.50;
let ze = 1.10;
let mes = 0;



    while(ze < chico){
        console.log(`Altura do Chico ${chico.toFixed(2)}, Altura do Zé ${ze.toFixed(2)}`);
        console.log(`Ano da contagem: ${mes}`);
        chico = chico + 0.02;
        ze = ze + 0.03;
        mes++;
    }

    console.log(`Altura do Chico ${chico.toFixed(2)}, Altura do Zé ${ze.toFixed(2)}`)
    console.log(`Ano da contagem: ${mes}`)


    console.log("Zé está mais alto que Chico")