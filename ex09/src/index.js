function myMutation(arr){
    var kraci;
    var duzi;
    if(arr[0].length <= arr[1].length){
        kraci = arr[0];
        duzi = arr[1];
    } else {
        kraci = arr[1];
        duzi = arr[0];
    }
    var tacno = false;
    var brojac = 0;
    for(var i=0;i<kraci.length;i++){
        for(var j=0;j<duzi.length;j++){
            if(kraci[i] == duzi[j]){
                tacno = true;
                brojac++;
                break;
            }
        }
    }
    if(brojac == kraci.length && tacno == true){
        return true;
    } else{
        return false;
    }
}


console.log(myMutation(["hello", "Hello"]));

module.exports = myMutation;