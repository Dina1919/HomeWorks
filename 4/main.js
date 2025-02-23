let arrOfNums = [0, 2, 16, 4, 150, 1, 3, 555, 64];

oddOrEven(arrOfNums)

function oddOrEven(arrOfNums) {
    let oddNums = [];
    let evenNums = [];
    arrOfNums.forEach(element => {
        if (element % 2 === 0) {
            evenNums.push(element)
        } else {
            oddNums.push(element)
        }
    });
    console.log(evenNums)
    console.log(oddNums)
}