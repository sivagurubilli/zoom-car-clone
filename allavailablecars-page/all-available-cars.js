
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
*/



let city =JSON.parse(localStorage.getItem("city"))
let changecity1 = document.querySelector(".changecity1");

changecity1.innerText=  city;

addressbox.innerText =  city

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
today.toDateString();

let date2 =document.querySelector(".date1")
let startDate = JSON.parse(localStorage.getItem("date"));
//startDate = startDate[0] + " " + startDate[1];

date2.innerText = "Start-time:" + " " + today;

let date3 =document.querySelector(".date3")
let endDate = JSON.parse(localStorage.getItem("date"));

date3.innerText = "End-time:" + " " + endDate;

function getdata(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))

    let city =JSON.parse(localStorage.getItem("city"))
    
    showdata(carsdata[city])
}
getdata();



function showdata(carsdata1){

    if(carsdata1==undefined){
        let image1 =document.createElement('img')
image1.id="image1"
image1.src ="https://img1.zoomcar.com/images/original/9a0a4bf46735e3565ed7f4451087c8c71acf4bd2.png?1607931267"
var head =document.createElement("p")
head.id ="head"
head.innerText ="NO cars matched for your search critiria  && we are offering services in limited cities refer ZMS "
        cont.append(image1,head)
    }else{

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
Rating.innerText = " ⭐" + " " + car.Rating;

let left = document.createElement('h3')

let price = document.createElement('h5')
price.innerText = "₹   " + `${car.price}`;
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

}

var carsdata = JSON.parse(localStorage.getItem("cars"))


function ninty(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))
    var ninty1=[];

    //document.getElementsByClassName("filter_list").style.backgroundColor = "green";
    let city =JSON.parse(localStorage.getItem("city"))
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
    var onetwenty1 =[];

  //  document.getElementsByClassName("filter_list").style.backgroundColor = "green";
  let city =JSON.parse(localStorage.getItem("city"))
    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
        if(e.Seater == 6){
            onetwenty1.push(e)
        }
    });
    showdata(onetwenty1);
}





function five(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))
    var fiveSeater = [];
    let city =JSON.parse(localStorage.getItem("city"))
    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
 if(e.Seater==5){
     fiveSeater.push(e)
 }
    });
showdata(fiveSeater)
}


function seven(){
    var sevenSeater =[];
    var carsdata = JSON.parse(localStorage.getItem("cars"))
  
    let city =JSON.parse(localStorage.getItem("city"))
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
    var sixSeater = [];
    let city =JSON.parse(localStorage.getItem("city"))
    let select_cars = carsdata[city];
    select_cars.forEach((e) =>{
 if(e.Seater==6){
     sixSeater.push(e)
 }
    });
showdata(sixSeater)
}




function deiselcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))
    var deisel =[]
    let city =JSON.parse(localStorage.getItem("city"))
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
    var petrol =[]
    let city =JSON.parse(localStorage.getItem("city"))
    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.fuel=="Petrol"){
            petrol.push(e)
        }
    });
    showdata(petrol)

}



function hatchbackcar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))
    var hatchback =[];
    let city =JSON.parse(localStorage.getItem("city"))

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
    var sedan =[];
    let city =JSON.parse(localStorage.getItem("city"))
    let select_cars = carsdata[city];
    select_cars.forEach((e)=>{
        if(e.Seater==5){
            sedan.push(e)
        }
    });
    showdata(sedan)

}


  
function Homecar(){
    var carsdata = JSON.parse(localStorage.getItem("cars"))
    var home =[]
    let city =JSON.parse(localStorage.getItem("city"))
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

    var airport =[]
    let city =JSON.parse(localStorage.getItem("city"))
    let select_cars=carsdata[city];
    select_cars.forEach((e)=>{
if(e.type=="airportcar"){
    airport.push(e)
}
    });
    showdata(airport)
}

if(localStorage.getItem("carShow")== null) {
localStorage.setItem("carshow",JSON.stringify([]));


}

function addtoBook(car) {
    localStorage.setItem("carshow",JSON.stringify(car));
    window.location.href = "first.html"
}


function confirm(){
    let btn = document.querySelector(".city-box-btn");
    btn.removeAttribute("disabled");
}

function confirmcity(){
    let selected_city =document.getElementById("selected_city").value;
    localStorage.setItem("city",JSON.stringify([selected_city]));
  

    let city_box = document.querySelector(".city-box");
    city_box.style.display = "none";
    window.location.reload();
}
//let changecity = document.querySelector(".changecity");





function changecity(){
    let city_box = document.querySelector(".city-box");
    city_box.style.display ="block";
    hidesidebar();
}







// function  when clicking on ham side bar will appear 

function showsidebar(){
    let sidebarbox =document.querySelector(".sidebarbox");
    sidebarbox.style.display = "block";
   
let sidebar =document.querySelector(".sidebar");

let sidebar_ovl =document.querySelector(".sidebar-ovl");
sidebar_ovl.style.opacity ="1";
sidebar_ovl.style.pointerEvents = "auto";
sidebar_ovl.addEventListener("click",hidesidebar);


}

// when clicking on star it hides function

function hidesidebar(){
    let sidebarbox =document.querySelector(".sidebarbox");
    sidebarbox.style.display = "none";

    let sidebar =document.querySelector(".sidebar");

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity ="0";
 
    sidebar_ovl.removeEventListener("click",hidesidebar);
}


function logout(){
    localStorage.setItem("user",null)
    window.location.reload()
}


