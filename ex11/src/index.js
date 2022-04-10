function mySplice(arr1, arr2, n) {
    if (n > arr2.length || n < 0) throw "False index value"
    var generatedArray = [];
    for (var i = 0; i < arr2.length; i++) {
        if(n == i) {
            for (var j = arr1.length - 1; j >= 0; j--) {
                generatedArray.push(arr1[j])
            }
        }
        generatedArray.push(arr2[i])
    }
    if(n == arr2.length) {
        for (var j = arr1.length - 1; j >= 0; j--) {
            generatedArray.push(arr1[j])
        }
    }
    return generatedArray;
}


console.log(mySplice([1,2,3], [4,5], 1));
console.log(mySplice([1,2,3], [4,5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;