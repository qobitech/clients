
function doit(A){    
    for(let i = 0; i < A.length; i++){
        if(count(A,A[i]) === 1){
            return A[i]
        }
    }
}

function count(array,value){
    return array.reduce((n,x) => n + (x === value),0);
}

var n = [4,2,3,2,3]

console.log(doit(n))