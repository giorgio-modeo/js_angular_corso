function fizzbuzz(n1) {
    let result = '';
    if (n1 % 3 === 0) {
    result += 'fizz';
    }
    if (n1 % 5 === 0) {
    result += 'buzz';
    }
    if (result === '') {
    result = 'non è divisibile per nessuno dei due numeri';
    }
    return result;
    }
console.log(fizzbuzz(6));
console.log(fizzbuzz(10));
console.log(fizzbuzz(15));
console.log(fizzbuzz(2));
