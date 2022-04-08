function myBouncer(arr){
    var nova = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] != "" && arr[i] != false && arr[i] != 0 && arr[i] != null &&  arr[i] != NaN && arr[i] != undefined ){
            nova.push(arr[i]);
        }
    }
    return nova;
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN,1,2,undefined]));
module.exports = myBouncer;