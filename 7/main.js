let arrOfNums = [0, 2, 16, 4];

newArr(arrOfNums, 1)

function newArr(arr, num) {
    let arr2 = []
    for (let i = arr.length - 1; i >= arr.length - num; i--) {
        arr2.push(arr[i])
        arr2.reverse()
    }
    console.log(arr2)
}
