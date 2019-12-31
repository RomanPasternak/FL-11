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
makeNumber();