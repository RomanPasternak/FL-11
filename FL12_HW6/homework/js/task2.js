alert('Input 3 numbers (a, b, c) for triangle sides length')
let a, b, c;
let obj = {
    'a': '',
    'b': '',
    'c': ''
};

for(let k = 0; k < Object.keys(obj).length; k++){
    let iter;
    while(!isFinite(iter)){ 
        iter = prompt('Input ' + Object.keys(obj)[k]);
        if(iter === null || iter === '' || isNaN(parseFloat(iter))){
            console.log('Invalid input data');
            alert('input values should be ONLY numbers')
            iter = 'aaa';
        }
        if(iter === '0'){
            alert('A triangle must have 3 sides with a positive definite length ');
            iter = 'aaa';
        }
    } 
    obj[Object.keys(obj)[k]] = parseInt(iter);
}

a = obj['a'];
b = obj['b'];
c = obj['c'];

if(a + b > c && b + c > a && a + c > b){
    if(a === b && b === c){
        console.log('Equilateral triangle');
    }else if(a === b || b === c || c === a){
        console.log('Isosceles triangle');
    }else{
        console.log('Scalene triangle');
    }
}else{
    console.log('Triangle doesn’t exist');
    alert('Triangle doesn’t exist');
}

