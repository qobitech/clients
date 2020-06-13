function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(S.length < 1 || K < 1){
        return false;
    }else{

        var ar = S.split('', S.length)
        var l = [];
        var s = [];

        for(let i = ar.length-1; i > 0; i--){
            
            for(let j = 0; j < K; j++){

                if(count(ar,ar[i]) !== j){
                    
                    
                    s.push(i)

                }else{
                    ar.splice(i,1);
                }
            }

        }
        return compressed(ar);
        
    }
    
}


function compressed(ar){
    let s = []
    var unique = "";
    for(let i=0; i<ar.length;i++){
        let count = 0;
        for(let j=0; j<ar.length;j++){
            
            if(ar[i] === ar[j]){
                count++
            }
        }
        
        s.push(count+''+ar[i])
        count = 0;

        unique = s.filter( onlyUnique ); // returns ['a', 1, 2, '1']

    }
    return unique.length;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function count(array,value){
    return array.reduce((n,x) => n + (x === value),0);
}


var s = "AAAAAAAAAAABXXAAAAAAAAAA";

console.log(solution(s,3))
// console.log(compressed(s));