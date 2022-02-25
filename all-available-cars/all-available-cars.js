
/*

let pickuplocation = JSON.parse(localStorage.getItem("pickuplocation"))||[0];

addressbox.innerText= "Location :" +" "+pickuplocation;

let startDate = JSON.parse(localStorage.getItem("startDate"));
startDate = startDate[0] + " " + startDate[1];
date1.innerText = "start-time:" + " " + startDate;

let end_Date = JSON.parse(localStorage.getItem("endDate"));
end_Date = end_Date[0] + " " + end_Date[1];
date3.innerText= "end-time:" + " " + end_Date;

if(JSON.parse(localStorage.getItem("trip"))[0]=="round"){
    let addressbox =document.getElementById("addressbox");
    addressbox.style.display ="none";
}else{
    let addressbox = document.getElementById("addressbox")
    addressbox.style.display ="block";
}

let city =JSON.parse(localStorage.getItem("city"))[0]
*/

let city ="Bangalore"
function getdata(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    showdata(carsdata[city])
}
getdata();


function showdata(carsdata1){

   cont.innerHTML=null
carsdata1.forEach(function(car){
    
    let div =document.createElement('div')
let image =document.createElement('img')
image.id="image"
image.src =car.img
let center =document.createElement('p')
center.id="center"

let location = document.createElement('p')
location.innerText = car.location

let name = document.createElement('h4')
name.innerText = car.name

let fuel = document.createElement('p')
fuel.innerText = car.fuel;

let seater = document.createElement('p')
seater.innerText = car.Seater+ " " + "Seater";

let Rating = document.createElement('h4')
Rating.innerText = " " + " " + car.Rating;

let left = document.createElement('h3')

let price = document.createElement('h5')
price.innerText = car.price;
price.id ="price"

let btn = document.createElement('button')
btn.innerHTML = "Book Now";
btn.id ="btn"


btn.onclick =() =>{
    addtoBook(car);
}

center.append(location,name,fuel,seater,Rating)
left.append(price,btn)
var cont =document.getElementById("cont")

div.append(image,center,left)
cont.append(div)
});

}

let ninty1=[];
let onetwenty1 =[];
var carsdata = JSON.parse(localStorage.getItem("cars"))


function ninty(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    //document.getElementsByClassName("filter_list").style.backgroundColor = "green";
    
    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
        if(e.Seater == 5){
            ninty1.push(e)
        }
    });
    
    showdata(ninty1);
    
}

function onetwenty(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))


  //  document.getElementsByClassName("filter_list").style.backgroundColor = "green";

    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
        if(e.Seater == 6){
            onetwenty1.push(e)
        }
    });
    showdata(onetwenty1);
}

var fiveSeater = [];
var sixSeater = [];
var sevenSeater =[]

function five(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
 if(e.Seater==5){
     fiveSeater.push(e)
 }
    });
showdata(fiveSeater)
}


function seven(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
 if(e.Seater==7){
     sevenSeater.push(e)
 }
    });
showdata(sevenSeater)
}

function six(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
 if(e.Seater==6){
     sixSeater.push(e)
 }
    });
showdata(sixSeater)
}

var deisel =[]
var petrol =[]

function deiselcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.fuel=="Diesel"){
            deisel.push(e)
        }
    });
    showdata(deisel)

}

function petrolcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.fuel=="Petrol"){
            petrol.push(e)
        }
    });
    showdata(petrol)

}

let hatchback =[];
let sedan =[];


function hatchbackcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.Seater==6||e.Seater==7){
            hatchback.push(e)
        }
    });
    showdata(hatchback)

}


function sedancar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.Seater==5){
            sedan.push(e)
        }
    });
    showdata(sedan)

}

let home =[]
let airport =[]
  
function Homecar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars=carsdata[city];
    select_cars.forEach((e)=>{
if(e.type=="homecar"){
    home.push(e)
}
    });
    showdata(home)
}
 
function Airportcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let select_cars=carsdata[city];
    select_cars.forEach((e)=>{
if(e.type=="airportcar"){
    airport.push(e)
}
    });
    showdata(airport)
}

function showsidebar(){
    let sidebar
}
