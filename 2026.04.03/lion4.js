const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
};

console.log(checkEvenOdd(5));