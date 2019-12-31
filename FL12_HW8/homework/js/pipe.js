function pipe(){
    let rez;
    for(let i = 1; i < arguments.length; i++){
        rez = arguments[i](arguments[i-1]);
        arguments[i] = rez;
    }
    return rez;   
}

pipe();