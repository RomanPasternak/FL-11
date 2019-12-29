let check = confirm('Do you want to play a game?');
let rand;
let userInp;
let attempt = 3;
const Two = 2;
const Three = 3
const minSize = 9;
const Step = 4;
let size = minSize;
let prize = 0;
const minPrize = 25;
let prizeArr = [minPrize, minPrize * Two, minPrize * Two * Two];
if(check === false){
    alert('You did not become a billionaire, but can.');
}else{
    while(check === true){
        rand = Math.floor(Math.random() * size);
        while(attempt > 0){
            userInp = +prompt(` Choose a roulette pocket numberfrom 0 to ${size - 1}\n Attempts left: ${attempt}
 Total prize: ${prize}$\n Posible prize on current attempt: ${prizeArr[attempt-1]}$`);
            if(rand === userInp){
                prize += prizeArr[attempt-1];
                size += Step;
                attempt = 0;
                for(let i = 0; i < prizeArr.length; i++){
                    prizeArr[i] *= Two;
                }
                check = confirm(` Congratulation, you won!\n Your prize is: ${prize}$.\n Do you want to continue?`);
            }else{
                attempt--;
                if (attempt === 0){
                    alert(` Thank you for your participation.\n Your prize is: ${prize}$`);
                    check = confirm('Do you want to play again?');
                    if(check === true){
                        prize = 0;
                        size = minSize;
                        prizeArr = [minPrize, minPrize * Two, minPrize * Two * Two];
                        attempt = Three;
                    }
                }
            }
        }
        if(check === false){
            alert(` Thank you for your participation.\n Your prize is: ${prize}$ `);
            check = confirm('Do you want to play again?');
            if (check === true){
                prize = 0;
                size = minSize;
                prizeArr = [minPrize, minPrize * Two, minPrize * Two * Two];
                attempt = Three;
            }
        }else{
            attempt = Three;
        }
    }
}