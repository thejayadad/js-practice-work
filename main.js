


let sumForEach = function(arr) {
    let sum = 0;
    arr.forEach((num) => {
        sum += num
    })

    return sum
}



console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0





let avgVal = function(arr) {
    // Your code here
    let sum = 0;
    let total = 0;
    arr.forEach((num, i,r) => {
        let numbr = parseInt(i ) 
        sum += num;
        total += numbr
        sum = sum / total
        

    })

    return sum

};

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null