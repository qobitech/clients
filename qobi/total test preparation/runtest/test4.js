function n( A, K){
    
    if(A.length === 0){
        return A;
    }else{
    
        let dup = A.map((e)=>e)

        for(let i=0; i < K; i++){
            A.length = A.length - 1;
            A.unshift(dup[dup.length - 1])
            dup = A.map((e)=>e)
        }
        
        return A

    }

}

var l = []
console.log(n(l,3))