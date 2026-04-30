const clapDigits = [3, 6, 9];

const calculateTotalClaps = (number) => {
    let totalClaps = 0;
    let factor = 1;

    let temoraryNumber = number;

    while (temoraryNumber > 0) {
        const lowerDigit = number % factor;
        const currentDigit = Math.floor(number / factor) % 10;
        const higherDigit = Math.floor(number / (factor * 10));

        for (const clapDigit of clapDigits) {
            if (currentDigit < clapDigit) {
                totalClaps += higherDigit * factor;
            } else if (currentDigit === clapDigit) {
                totalClaps += higherDigit * factor + (lowerDigit + 1);
            } else {
                totalClaps += (higherDigit + 1) * factor;
            }
        }

        factor *= 10;
        temoraryNumber = Math.floor(temoraryNumber / 10);
    }

    return totalClaps;
};

const calculateClapsOfNumber = (number) => {
    const numberString = number.toString();

    let claps = 0;

    for (const letter of numberString) {
        if (letter === '3' || letter === '6' || letter === '9') {
            ++claps;
        }
    }

    return claps;
};

const calculateGapClaps = (number1, number2) => {
    const number1TotalClaps = calculateTotalClaps(number1);
    const number1Claps = calculateClapsOfNumber(number1);
    const number2TotalClaps = calculateTotalClaps(number2);

    return number2TotalClaps - number1TotalClaps + number1Claps;
}

const number1 = 999999;
const number2 = 10000000;
console.log(calculateGapClaps(number1, number2));
