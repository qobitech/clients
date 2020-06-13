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
        let rightarray = []; let leftarray = [];
        //find first occurence && last occurence
        let index = [];
        for(let i = 0; i < H.length; i++){
            if(H[i] === highest){
                index.push(i);
            }
        }
        let firstindex = Math.min(...index);
        let lastindex = Math.max(...index);
        
        lr(H,leftarray,rightarray,firstindex);
        
        if(leftarray.length === 0 && rightarray.length > 0){
            //find lasth occurence
            if (lastindex === firstindex){
                let temp = sorted; 
                temp.length = temp.length-1
                return (highest + (temp[temp.length-1] * temp.length));                
            }else{
                if(lastindex === (H.length-1)){
                    return highest * H.length;
                }else{
                    let right = []
                    for(let i=0;i<H.length;i++){
                        if(i > lastindex){
                            right.push(H[i])
                        }
                    }
                    secondHighest = Math.max(...right);                   
                    return (( highest * (lastindex+1) ) + ( secondHighest * right.length ));    
                }
            }
        }else if(leftarray.length > 0 && rightarray.length === 0){
            if (lastindex === firstindex){
                let temp = sorted; 
                temp.length = temp.length-1
                return (highest + ((temp[temp.length-1]) * temp.length));                
            }else{
                let left = []
                for(let i=0;i<H.length;i++){
                        if(i < firstindex){
                            left.push(H[i])
                        }
                }
                secondHighest = Math.max(...left);                   
                return (( highest * (H.length - (lastindex)))  + ( secondHighest * left.length ));    
            }
        }else if(leftarray.length > 0 && rightarray.length > 0){
            var ans1 = (highest * (leftarray.length+1)) + (Math.max(...rightarray) * rightarray.length);
            var ans2 =  (highest * (rightarray.length+1)) + (Math.max(...leftarray) * leftarray.length);
            return ans1 > ans2 ? ans2 : ans1;  
        }

    }
}

function lr(H,leftarray,rightarray,firstindex){
    for(let i=0; i < H.length; i++){
        if(i < firstindex){
            leftarray.push(H[i])
        }else if(i > firstindex){
            rightarray.push(H[i])
        }
    }
}


const test =  [1, 4, 3]

console.log(hard(test))

// Example test:   [3, 1, 4]
// WRONG ANSWER (got 3 expected 10)

// Example test:   [5, 3, 2, 4]
// WRONG ANSWER (got 8 expected 17)

// Example test:   [5, 3, 5, 2, 1]
// WRONG ANSWER (got 10 expected 19)

// Example test:   [7, 7, 3, 7, 7]
// Output (stderr):
// Invalid result type, integer expected, non-integer number firstindexund
// RUNTIME ERROR (tested program terminated with exit code 1)

// Example test:   [1, 1, 7, 6, 6, 6]
// WRONG ANSWER (got 36 expected 30)