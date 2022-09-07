// -----start--finis--interval
// for (let i = 20; i >= -20; i -= 2){
//     console.log(i);
// }
// console.log("hjhjhjh");


function getCommonElements(array1, array2) {
    const presentElementArray = [];
  
    for (let index = 0; index < array1.length; index++) {
        if (array2.includes(array1[index]))
            { presentElementArray.push(array1[index]);}
            
        return presentElementArray;
    }
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([10, 20, 30, 40, 24, 12, 27, 3], [4, 30, 17, 10, 40, 12, 8, 3, 36, 27]));