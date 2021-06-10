let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    stepsTotal: 0,
    move: function(){
        this.stepsTotal = this.stepsTotal + Math.floor(Math.random()*11);
    }
};


let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    stepsTotal: 0,
    move: function(){
        this.stepsTotal = this.stepsTotal + Math.floor(Math.random()*11);
    }
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    stepsTotal: 0,
    move: function(){
        this.stepsTotal = this.stepsTotal + Math.floor(Math.random()*11);
    }
};

let astroDog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    stepsTotal: 0,
    move: function(){
        this.stepsTotal = this.stepsTotal + Math.floor(Math.random()*11);
    }
};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    stepsTotal: 0,
    move: function(){
        this.stepsTotal = this.stepsTotal + Math.floor(Math.random()*11);
    }
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
astroDog["astronautID"] = 4;
waterBear["astronautID"] = 5;
// Create an array to hold the animal objects.

let crew = [superChimpOne , salamander , superChimpTwo , astroDog , waterBear];

// Print out the relevant information about each animal.

// for (i=0; i < crew.length; i++){
//     console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`)
// }


// Start an animal race!

let crewSteps = [superChimpOne.stepsTotal , salamander.stepsTotal , superChimpTwo.stepsTotal , astroDog.stepsTotal , waterBear.stepsTotal];

let crewTurn = [0, 0, 0, 0, 0];


function raceTime(arr){
    for (i=0; i < arr.length; i++){
        while (crewSteps[i] > 20){
            crew[i].move;
            crewTurn[i] = crewturn[i] + 1;
             if (crewSteps[i] >= 20){
                console.log(`${crew[i].name} took ${crewTurn[i]} turns to take 20 steps.`)
        }
       }

    }
}

raceTime(crew);