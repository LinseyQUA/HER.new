// JavaScript Document
console.log("hi");

/*Elementen uit html ophalen*/
var deButton = document.querySelector("img:nth-child(2)");
var deNav = document.querySelector(".navigatie")
var body = document.querySelector("body")


/*functie koppelen aan knop als je klikt*/
deButton.addEventListener("click", toggleMenu);


/*verschijning van het hamburger menu*/
function toggleMenu() {
    deNav.classList.toggle("toonMenu");
  }




/*Functie klikken op submit knop*/ 
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
