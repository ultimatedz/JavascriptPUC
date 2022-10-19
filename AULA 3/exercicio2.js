function menos(X,Y){

    if(typeof(X) == 'number' && typeof(Y) == 'number'){
        return X-Y;
    }else{
        return X*-1;
    }

}


console.log(menos(2,1))
console.log(menos(2))
