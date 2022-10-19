

function eCrescente(array){
    for (let i=1; i< array.length; i++){
        if (array[i] < array[i-1]){
            console.log("Não é crescente")
            return -1;
        }
    }
    return console.log("É crescente")

}


let array = [1,2,3,4,5,6];
let array2 = [1,2,-3,4,5,6];
let array3 = [1,2,3,4,-5,6]
let array4 = [1,2,3,4,5,6,7,8,80,90,123]

eCrescente(array)
eCrescente(array2)
eCrescente(array3)
eCrescente(array4)
