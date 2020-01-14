function convert(){
    for(let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'number'){
            arguments[i] = arguments[i].toString();
        }else if (typeof arguments[i] === 'string'){
            arguments[i] = Number(arguments[i]);
        }
    }
    return arguments;
}

function executeforEach(arr, call){
    for(let i = 0; i < arr.length; i++){
        call(arr[i]);
    }
}

function mapArray(arr, call){
    let rez = [];
    let getNum = function(i){
        if (typeof i === 'string'){
            i = Number(i);
        }
        rez.push(i);
    }
    executeforEach(arr, getNum);
    for(let i = 0; i < rez.length; i++){
        rez[i] = call(rez[i]);
    }
    return rez;
}

function filterArray(arr, call){
    let rez = [];
    for(let i = 0; i < arr.length; i++){
        if(call(arr[i]) === true){
            rez.push(arr[i]);
        }
    }
    return rez;
}

function flipOver(str){
    let rez = [];
    for (let value of str){
        rez.unshift(value);
    }
    rez = rez.join('');
    return rez;
}

function makeListFromRange(arr){
    let rez = [];
    for(let i = arr[0]; i <= arr[1]; i++){
        rez.push(i);
    }
    return rez;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(arr, key){
    let rez = [];
    let call = function(obj){
        rez.push(obj[key]);
    }
    executeforEach(arr, call);
    return rez;
}

let chek = 30;
function substitute(arr){
    let rez = [];
    let call = function(i){
        if(i < chek){
            rez.push('*');
        }else{
            rez.push(i);
        }
    }
    executeforEach(arr, call);
    return rez;
}

function getPastDay(date, num){
    return date.getDate() + num;
}

function formatDate(date){
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}