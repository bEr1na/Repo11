var myStr = "Paragon is the best!";

function useMethods(str){
    var myReverse = str.split("");
    myReverse = myReverse.reverse();
    myReverse = myReverse.join("");

    

    var countCharacters = myReverse.split(" ");
    countCharacters = countCharacters.map(x => x.length);
   

    return {
        myReverse, 
        countCharacters
    };
}

console.log(useMethods(myStr));
module.exports = useMethods;