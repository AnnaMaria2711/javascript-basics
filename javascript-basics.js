
let age = 8;
let score = 0;
let username = "";
isAdmin= false;

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if(age>18){
    console.log("Älter als 18")
}
else if(age === 18){
    console.log("18")
}
else{
    console.log("Jünger als 18")
}

if(score == true){
    console.log("score is evaluated as truthy")
}
else{
    console.log("score is NOT evaluated as truthy")
}

if(username === undefined){
    console.log("Username is falsy")
}
else{
console.log("Username is truthy")
}

if(!isAdmin){
    console.log("isAdmin evaluated as falsy")
}
else{
    console.log("isAdmin evaluated as truthy")
}