const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];


let primeArray = []

for (let i = 2; i <= numbers.length; i++) {

    let count = 0
    for (let j = numbers[i]; j <= i; j++) {
            if(numbers[i]%j==0){
                count++;
            }
        }
        if(count == 2) {
            primeArray.push(numbers[i]);
        } 
    }
    console.log(primeArray) 

