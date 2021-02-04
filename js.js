let p = document.getElementById("p");
let pa = document.getElementById("pa");
let par = document.getElementById("par");

let myObject = {
    "name" : "yacine",
    "age" : 20,
    "lastname" : "lyoubi",
    "cars" : [
        {
            "name" : "ford",
            "model" : [
                "Fiesta",
                "Focus",
                "Mustang",
            ]
        },
        {
            "name" : "BMW",
            "model" : [
                "320",
                "X3",
                "X5"
            ]
        },
        {
            "name" : "Fiat",
            "model" : [
                "500",
                "Panda"
            ]
        },
    ],
    "Passion" : [
        "manga",
        "jeux-videos",
        "japon"
    ],
    "Work" : null,
}
Data = "La personne qui s'appelle " + myObject.name + " agé de " + myObject.age + " qui aime les " + myObject.Passion + " possédent plusieurs véhicules qui sont ";

for (i in myObject.cars){
    Data += "<h1>" + myObject.cars[i].name + "</h1>" 
    for(j in myObject.cars[i].model)
    Data += myObject.cars[i].model[j] + " ";
}

p.innerHTML = Data + " ";


let myObj = {
    name:"yacine",
    Age:30,
    city :"Paris"
}

let myJSONObj = JSON.stringify(myObj)

pa.innerHTML = myJSONObj;


let myObjectJs = JSON.parse(myJSONObj)

par.innerHTML = myObjectJs.name + " " + myObjectJs.Age + " " + myObjectJs.city;

