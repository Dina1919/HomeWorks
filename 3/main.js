let arrOfNums = [0, 2, 16, 4, 150];

maxNumber(arrOfNums)

function maxNumber(arrOfNums){
    let maxEl = arrOfNums[0]
    arrOfNums.forEach(element => {
        if(element > maxEl){
            maxEl = element
        }
    });
    console.log(`Max number of array is ${maxEl}`)
}