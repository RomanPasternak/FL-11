function getMin(){
    let result = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        result = (result < arguments[i]) ? result : arguments[i];
    }
    return result;
}

getMin();