

var cars = JSON.parse(localStorage.getItem("cars"))

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

