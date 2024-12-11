

const section02ScrollY = "550"; 
const section02ScrollYend= "800";
const section02Contents = document.querySelector(".section02Contents");
const section03ScrollY = "1050"; 
const section03ScrollYend= "1650";
const section03Contents = document.querySelector(".section03Contents");



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
})



