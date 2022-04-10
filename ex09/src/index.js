
function myMutation(arr) {
    for (var i = 0; i < arr[1].length; i++) {
        var inFirst = false;
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[0][j].toLowerCase() == arr[1][i].toLowerCase()) {
                inFirst = true;
                break;
            }
        }
        if (!inFirst) return false;   
    }
    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;