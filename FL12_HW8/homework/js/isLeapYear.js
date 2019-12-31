function isLeapYear(str){
    if( str.length !== 19 ){
        return 'Invalid Date';
    }else{
        let a = str.substr(0, 10);
        let b = str.substr(11,19);
        let sum = a + 'T' + b;
        let d = new Date(sum);
        let year = d.getFullYear();
        if(isNaN(year)){
            return 'Invalid Date';
        }else if( year % 4 === 0 && year % 100 !== 0 ){
            return year + ' is a leap year'
        }else{
            return year + ' is not a leap year';
        } 
    }
}
isLeapYear();