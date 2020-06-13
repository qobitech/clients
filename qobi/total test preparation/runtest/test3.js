
function doit(n){
    var arr = [];
    while(n > 0){
        arr.push(n % 2)
        n = Math.floor(n / 2);
    }    
    arr.reverse();
    let index = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 1){
            index.push(i)
        }
    }
    let num = 0;
    let res = []
    for(let i = 0; i < index.length-1; i++){
        for(let j = index[i]; j < index[i+1]; j++){
            num += 1;
        }
        res.push(num-1)
        num = 0;
    }
    return res.length === 0 ? 0 : Math.max(...res);
}

var n = 1041;

console.log(doit(n))