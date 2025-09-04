const animals = [
    {
        name: "Mandu",
        type: "Cat",
    },
    {
        name: "Garry",
        type: "Cat",
    },
    {
        name: "Buddy",
        type: "Dog",
    },
    {
        name: "Boss",
        type: "Dog",
    },
];

function isCat(animal) {
    if (animal.type == "Cat") {
        return true;
    } else {
        return false;
    }
}

const onlyCats = animal.filter(isCat);
const onlyDogs = animal.filter(isDog);


function isDog(animal) {
    if (animal.type == "Dog") {
        return true;
    } else {
        return false;
    }
}
function all(animal) {
    return true;
}
function none(animal) {
    return false;
}

//console.log("filter all", animals.filter(all));
//console.log("filter none", animals.filter(none));

