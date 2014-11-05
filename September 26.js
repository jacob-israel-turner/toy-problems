function primeNumber(number) {
    for (var i = 0; i < number; i++) {
        if (i !== number && i !== 1 && number % i === 0) {
            return false
        }
    }
    return true;
}
alert(primeNumber(8));