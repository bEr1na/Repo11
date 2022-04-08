var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arg){
    var monitorsList =[];
    for(var i=0; i< arg.length;i++){
        var pomocni = [];
        pomocni.push(arg[i]);
        pomocni.push(i+1);
        monitorsList.push(pomocni);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;