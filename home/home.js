

// Appending NavBar
import navbar from "./components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();
var carData = JSON.parse(localStorage.getItem("cars"));
console.log(carData);
// let date = document.getElementById("date").value;
let sidebar = document.getElementById("sidebar");
let low_nav = document.getElementById("low_nav");
sidebar.onclick = function () {
    low_nav.style.display = "block";
    window.onclick = function(event) {
    if (event.target == low_nav) {
        low_nav.style.display = "none";
    }
    }
}
// function for pop window
let trip = document.getElementById("trip");
let roundTrip = document.getElementById("roundTrip");
let close_trip = document.querySelector(".close_trip");
roundTrip.onclick = function(){
    trip.style.display = "block";
};
close_trip.onclick= function(){
    trip.style.display = "none";
};
window.onclick = function(event) {
if (event.target == trip) {
    trip.style.display = "none";
}
}
let pickup = document.getElementById("pickup");
let pickoff = document.getElementById("pickoff");
let pick_up = document.getElementById("pick_up");
let back_arrow = document.getElementById("back_arrow");
let date = document.getElementById("date");
pickup.onclick = function (){
pick_up.style.display = "block";
nav.style.display="none"
}
back_arrow.onclick = function(){
pick_up.style.display = "none";
nav.style.display = "";
}
pickoff.onclick = function (){
pick_up.style.display = "block";
nav.style.display = "none";
date.style.display = "block";
// nav.style.backgroundColor = "white";
// pickoff_area.style.color = "black";
}
let about_us = document.getElementById("about_us");
let about_option = document.getElementById("about_option");
let i = document.querySelector("#about_us>i");
about_us.onclick = function(){
if(about_option.style.display === "block"){
    about_option.style.display = "none";
}
else{
    about_option.style.display = "block";
}
}
//   show map
function getMap(){
let iframe = document.getElementById("gmap_canvas");
var ip = ''; // Current IP
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);
    let x = json.city;
    // Country code output, field "country_code"
    // alert(json.country_code);
    console.log(this.responseText);
    iframe.src = `https://maps.google.com/maps?q=${x}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    return x;
}
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();
}
let main = document.getElementById("main");
let location = document.getElementById("location");
location.onclick = function(){
    getMap()
main.style.display = "block";
}
// back_arrow.onclick = function(){
//     pick_up.style.display = "none";
//     nav.style.display = "";
// }
let pickup_area = document.querySelector("#pickup>p");
let pickoff_area = document.querySelector("#pickoff>p");
let findCar = document.getElementById("findCar");
let currLocation = document.getElementById("currLocation");
currLocation.onclick = function(){
// let iframe = document.getElementById("gmap_canvas");
var ip = ''; // Current IP
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);
    let x = json.city;
    // Country code output, field "country_code"
    // alert(json.country_code);
    pick_up.style.display = "none";
    nav.style.display = "";
    // date.style.display="none";
    pickup_area.innerText = json.city+","+" "+json.country;
   localStorage.setItem("city",JSON.stringify(json.city))
    
    pickup_area.style.color = "black";
    pickoff.style.display = "block";
    findCar.style.backgroundColor = "green";
    findCar.style.color = "white";
    findCar.style.cursor = "pointer";
    //console.log(json.city+json.country);
     
    
    setInterval(function(){
        pickoff_area.style.display = "block";
        pickoff_area.innerText = json.city+","+" "+json.country;
      
        // date.style.display = "block";
        pickoff_area.style.innerText = "black"
    }, 3000);
    // iframe.src = `https://maps.google.com/maps?q=${x}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();
}
findCar.addEventListener("click",findCarData);
function findCarData(){
var ip = ''; // Current IP
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.responseText);
    let x = json.city;
    console.log(json.city+json.country);
    carData.forEach(element => {
        let name= element.name;
        if(x===element.City){
            localStorage.setItem("city",JSON.stringify(element.City))
            console.log(element.name);
        }
    });
    }
let d = document.getElementById("date").value;
console.log(d)
localStorage.setItem("date",JSON.stringify(d))
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();
}

let findcars = document.getElementById("findCar")
findcars.onclick = function() {
  
    window.location.href ="/allavailablecars-page/all-available-cars.html"
}

var pickupcity1 =document.getElementById("pickupcity")
var city = JSON.parse(localStorage.getItem("city"));
pickupcity1.innerText = city
