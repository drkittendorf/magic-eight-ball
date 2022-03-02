// magic 8 ball
console.log('magic 8 ball');

const userName = "Dude";

console.log (userName ? `Hello ${userName}`: `Hello!` )

const userQuestion = '';

console.log(`Dear ${userName} you asked ${userQuestion}`)

let randoNum = Math.floor(Math.random() * 8);

console.log(randoNum)

let eightBall = ``;


switch (randoNum) {
    case 0:
    eightBall = eightBall.concat('It is certain')
    break;
    case 1:
        eightBall = eightBall.concat('It is certain')
    break;
    case 2:
        eightBall = eightBall.concat('Reply Hazy Try Again')
    break;
    case 3:
        eightBall = eightBall.concat('Cannot predict now')
    break;
    case 4: 
    eightBall = eightBall.concat('Do not count on it')
   break;
    case 5: 
    eightBall = eightBall.concat(`My sources say 'no'`)
   break;
    case 6: 
    eightBall = eightBall.concat('signs point to yes')
   break;
    case 7: 
    eightBall = eightBall.concat('For sure. For sure.')
   break;
 }


 console.log(eightBall);
