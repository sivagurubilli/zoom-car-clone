import navbar from "./components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();    

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