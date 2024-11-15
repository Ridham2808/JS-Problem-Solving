// 8
function findAverage(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));
