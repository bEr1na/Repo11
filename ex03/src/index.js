var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myNewPets){
     myNewPets.push("Bird", "Fish");
     var firstPet = myNewPets.shift();
     var lastPet = myNewPets.pop();
     myNewPets.unshift("Lion");



    return myNewPets;


}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
