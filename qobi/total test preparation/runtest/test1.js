
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 1){
        return 1;
    }else if(A.length === 1){
        if(A[A.length-1] < 1){
            return 1;    
        }else if(A[A.length-1] === 1){
            return 2;
        }else{
            return A[A.length-1]-1;
        }
    }else{
        let res = 0;
        A.sort(function(A,B){return A-B})
        
        if(A[0] > 1){
            return 1;
        }else {
            for(let i=0; i < A.length-1; i++){
                if(A[i]>0){
                    if(A[i]+1 < A[i+1]){
                        return A[i]+1;
                    }else{
                        res = A[i+1]+1;
                    }
                }
            }    
        }
        return res <= 0 ? 1 : res;
    }
}


const ga = [10,4,8,1,2]

console.log(solution(ga))