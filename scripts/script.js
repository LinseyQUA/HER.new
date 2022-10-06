// JavaScript Document
console.log("hi");

/*Elementen uit html ophalen*/
var deButton = document.querySelector("img:nth-child(2)");
var deNav = document.querySelector(".navigatie")

/*functie koppelen aan knop als je klikt*/
deButton.addEventListener("click", toggleMenu);


/*verschijning van het hamburger menu*/
function toggleMenu() {
    deNav.classList.toggle("toonMenu");
  }