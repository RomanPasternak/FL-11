function makeNumber(str){
    if(str === ''){
        return str;
    }else{
        let arr = str.split('');
        return arr.reduce(function(sum , current){
            if(isNaN(Number(sum))){
                return '';
            }else if(isNaN(Number(current))){
                return sum
            }else{
                return sum + Number(current);
            }
        });
    }
}

function countNumbers(str){
    let num = makeNumber(str);
    let obj = {};
    let count = 0;
    for(let i of num){
        for(let j of num){
            if( i === j){
                count++;
                j = '';
            }
        }
        obj[i] = count;
        count = 0;
    }
    return obj;
}

countNumbers();
