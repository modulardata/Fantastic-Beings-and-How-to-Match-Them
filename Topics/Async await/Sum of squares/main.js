async function sumOfSquares(numbers) {
    const squares = numbers.map((number) => number * number);
    return squares.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Write code below this line
async function calculateSum(arrayOfNumbers) {
    try {
        const sum = await sumOfSquares(arrayOfNumbers);
        console.log(sum);
    } catch (error) {
        console.log(error);
    }
}
