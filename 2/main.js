let mainArr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let index = mainArr.length - 1; index >= 0; index--) {
    reversedArr.push(mainArr[index])
}


console.log( "[" + mainArr + "]" + " = " + "[" + reversedArr + "]");