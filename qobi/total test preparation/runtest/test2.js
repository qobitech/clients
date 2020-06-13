function hard(H){

    if(H.length < 1){
        return 0;
    }else if(H.length === 1){
        if(H[0] < 1){
            return 0;
        }else if(H[0] === 1){
            return 1;
        }else{
            return H[0];    
        }
    }else if(H.length === 2){
        return H[0] + H[1];   
    }else{
        //sortedlicate
        let sorted = H.map((e)=>{return e});
        //get total area of everything
        sorted.sort(function(a,b){return a-b});
        let highest = Math.max(...H);
        let secondHighest = 0;

        //compare beginning
        if(H[0] === highest){
            let index = [0];
            for(let i = 0; i < H.length; i++){
                if(i !== 0){
                    if(H[i] === highest){
                        index.push(i);
                    }
                }
            }
            if(index.length === 1 ){
                let temp = sorted; 
                temp.length = temp.length-1
                return H[0] + (temp[temp.length-1] * temp.length);
            }else{
                if(H[H.length-1] === highest){
                    return highest * H.length;
                }else{
                    let indexlast = H.lastIndexOf(highest);
                    let left = []
                    for(let i=0;i<H.length;i++){
                        if(i > indexlast){
                            left.push(H[i])
                        }
                    }
                    secondHighest = Math.max(...left);                   
                    return ( H[0] * (index[index.length-1]+1) ) + ( secondHighest * left.length );    
                }
            }
        //compare end
        }else if(H[H.length-1] === highest){
                let lastindex = [H.length-1];
                for(let j = H.length-1; j >= 0; j--){
                    if(j !== H.length-1){
                        if(H[j] === highest){
                            lastindex.push(j);
                        }
                    }
                }
            if(lastindex.length === 1 ){
                let lasttemp = sorted; 
                lasttemp.length = lasttemp.length-1;
                return H[H.length-1] + lasttemp[lasttemp.length-1] * lasttemp.length;
            }else{
                let indexfirst = H.indexOf(highest);
                let right = []
                for(let i=0; i<H.length;i++){
                    if(i < indexfirst){
                        right.push(H[i]);
                    }
                }
                secondHighest = Math.max(...right);                   
                return (H[H.length-1] * (H.length - (lastindex[lastindex.length-1]))) + (secondHighest * right.length);
            }            
        //compare somewhere in the middle
        }else{
                let rightarray = []; let leftarray = [];
                let midindex = 0;
                midindex = H.indexOf(highest);
                for(let i = 0; i < H.length; i++){
                    if(i < midindex){
                        leftarray.push(H[i])
                    }else if(i > midindex){
                        rightarray.push(H[i])
                    }
                }
                var ans1 = (highest * (leftarray.length+1)) + (Math.max(...rightarray) * rightarray.length);
                var ans2 =  (highest * (rightarray.length+1)) + (Math.max(...leftarray) * leftarray.length);
                return ans1 > ans2 ? ans2 : ans1;  
        }        
    }
}

const test = [1, 1, 7, 6, 6, 6]

console.log(hard(test))

// Example test:   [3, 1, 4]
// WRONG ANSWER (got 3 expected 10)

// Example test:   [5, 3, 2, 4]
// WRONG ANSWER (got 8 expected 17)

// Example test:   [5, 3, 5, 2, 1]
// WRONG ANSWER (got 10 expected 19)

// Example test:   [7, 7, 3, 7, 7]
// Output (stderr):
// Invalid result type, integer expected, non-integer number found
// RUNTIME ERROR (tested program terminated with exit code 1)

// Example test:   [1, 1, 7, 6, 6, 6]
// WRONG ANSWER (got 36 expected 30)