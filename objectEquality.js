const objectA = {
    id: 1, 
    name: "edison"
};
const objectB = {
    id: 1, 
    name: "edison"
};

const objectC = {
    id: 1, 
    name: "edison"
};
const objectD = {
    id: 2, 
    name: "edison"
};

if(objectA.id == objectB.id && objectA.name == objectB.name) {
    console.log("true");
}
else {
    console.log("false")
}

if(objectC.id == objectD.id && objectC.name == objectD.name) {
    console.log("true");
}
else {
    console.log("false")
}