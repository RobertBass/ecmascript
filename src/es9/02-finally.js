const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('OK');
        } else{
            reject('OOPS');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizado'));