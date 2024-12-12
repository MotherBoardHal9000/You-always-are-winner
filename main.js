

const section02ScrollY = "550"; 
const section02ScrollYend= "800";
const section02Contents = document.querySelector(".section02Contents");
const section03ScrollY = "1050"; 
const section03ScrollYend= "1650";
const section03Contents = document.querySelector(".section03Contents");
const section04ScrollY = "2000"; 
const section04ScrollYend= "2750";
const section04Contents = document.querySelector(".section04Contents");
const section05ScrollY = "2810"; 
const section05ScrollYend= "3200";
const section05Contents = document.querySelector(".section05Contents");



window.addEventListener("scroll",function(addEventListener){
    console.log(window.scrollY)
    console.log("over");

    if (
        window.scrollY >section02ScrollY &&
        window.scrollY <section02ScrollYend
      ){ section02Contents.style.opacity= 1;}

    if (
        window.scrollY >section03ScrollY &&
        window.scrollY <section03ScrollYend
      ){ section03Contents.style.opacity= 1;}
      if (
        window.scrollY >section04ScrollY &&
        window.scrollY <section04ScrollYend
      ){ section04Contents.style.opacity= 1;}
      if (
        window.scrollY >section05ScrollY &&
        window.scrollY <section05ScrollYend
      ){ section05Contents.style.opacity= 1;}
})



