module.exports = function toReadable (number) {
    let wordList = {
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' :  'six',
        '7' :  'seven',
        '8' :  'eight',
        '9' :  'nine',
        '10' :  'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred', 
    }

     if (number === 0) { return 'zero'}
    let word = '';
    let hundreds = Math.trunc(number / 100);
    if (hundreds != 0) {
        word += wordList[hundreds] + ' hundred';
    } 

    let tens = number % 100;
    if (tens === 0) {
        return word.trim();
    } else {
        if (tens < 10) {
            return (word += ' ' + wordList[tens]).trim(); 
        }
        if ((tens >= 10) && (tens < 20)) {
            return (word += ' ' + wordList[tens]).trim();
        }
        if ((tens % 10) === 0) {
            return (word += ' ' + wordList[tens]).trim();
        } 
        let ones = Math.trunc(tens / 10);
        if (ones != 0) {
        word += ' ' + wordList[ones*10];

        let lastOnes = tens % 10;
        return (word += ' ' + wordList[lastOnes]).trim();
    } 

    } 

    }
    


    
