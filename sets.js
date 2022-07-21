const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    /*precisa usar o spread [...]
     para transformar a saída em array
    */
    return[...mySet];
    
}

console.log(valoresUnicos(meuArray));