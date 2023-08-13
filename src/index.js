module.exports = function toReadable (number) {
    let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
            'eleven', 'twelve', 'thirteen', "fourteen", 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let twoDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    if (number >= 0 && number < 20) {
        return digit[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return `${twoDigit[number / 10]}`;
        }
        else {
            return `${twoDigit[Math.trunc(number / 10)]} ${digit[number % 10]}`;
        }
    }

    if (number / 100 > 0) {

        if (number % 100 === 0) {
            return `${digit[number / 100]} hundred`;
        } 
        else if (number % 10 === 0) {
            return `${digit[Math.trunc(number / 100)]} hundred ${twoDigit[((number % 100) / 10)]}`;
        }
        else if (number % 100 < 20) {
            return `${digit[Math.trunc(number / 100)]} hundred ${digit[number % 100]}`;
        } 
        else {
            return `${digit[Math.trunc(number / 100)]} hundred ${twoDigit[Math.trunc((number % 100) / 10)]} ${digit[number % 10]}`;
        }
    }
} 
  

