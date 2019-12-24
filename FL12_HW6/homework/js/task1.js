alert('Input 3 values (a, b, c) for quadratic equation (ax2 + bx + c = 0)')
let a, b, c, x1, x2, d;
let obj = {
    'a': '',
    'b': '',
    'c': ''
};

for(let k = 0; k < Object.keys(obj).length; k++){
    let iter;
    while(!isFinite(iter)){ 
        iter = prompt('Input ' + Object.keys(obj)[k]);
        if(Object.keys(obj)[k] === 'a' && iter === '0' || iter === null || iter === '' || isNaN(parseFloat(iter))){
            iter = 'aaa';
            console.log('Invalid input data');
        }
    } 
    obj[Object.keys(obj)[k]] = parseFloat(iter);
}

a = obj['a'];
b = obj['b'];
c = obj['c'];

d = Math.pow(b,2) - 4 * a * c; 

if(d < 0){
    console.log('no solution');
}else if(d > 0){
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    console.log('x1 = '+ Math.floor(x1) + ' and x2 = ' + Math.floor(x2));
}else if(d === 0){
    x1 = -b/(2*a);
    console.log('x = '+ Math.floor(x1) );
}
