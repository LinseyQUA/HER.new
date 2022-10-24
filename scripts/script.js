// JavaScript Document
console.log("hi");

/*Elementen uit html ophalen*/
var deButton = document.querySelector("img:nth-child(2)");
var deNav = document.querySelector(".navigatie")
var body = document.querySelector("body")
var donker = document.querySelector(".maan")
var buttonGroter = document.querySelector("button:first-of-type")
var main = document.querySelector("main")



/*functie koppelen aan knop als je klikt*/
deButton.addEventListener("click", toggleMenu);
buttonGroter.addEventListener("click", groter)
donker.addEventListener("click", thema)


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


  /*vergroting van de tekst*/
function groter () {
  main.classList.toggle("groter")
 
}

/*Verandering kleuren naar donker thema*/
function thema () {
  body.classList.toggle("kleuren")
}



