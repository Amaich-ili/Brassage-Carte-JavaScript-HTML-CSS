// Array d'images
const img = [
    "cartes/1.png",
    "cartes/2.png",
    "cartes/3.png",
    "cartes/4.png",
    "cartes/5.png",
    "cartes/6.png",
    "cartes/7.png",
    "cartes/8.png",
    "cartes/9.png",
    "cartes/10.png",
    "cartes/11.png",
    "cartes/12.png",
    "cartes/13.png",
    "cartes/14.png",
    "cartes/15.png",
    "cartes/16.png",
    "cartes/17.png",
    "cartes/18.png",
    "cartes/19.png",
    "cartes/20.png",
    "cartes/21.png",
    "cartes/22.png",
    "cartes/23.png",
    "cartes/24.png",
    "cartes/25.png",
    "cartes/26.png",
    "cartes/27.png",
    "cartes/28.png",
    "cartes/29.png",
    "cartes/30.png",
    "cartes/31.png",
    "cartes/32.png",
    "cartes/33.png",
    "cartes/34.png",
    "cartes/35.png",
    "cartes/36.png",
    "cartes/37.png",
    "cartes/38.png",
    "cartes/39.png",
    "cartes/40.png",
    "cartes/41.png",
    "cartes/42.png",
    "cartes/43.png",
    "cartes/44.png",
    "cartes/45.png",
    "cartes/46.png",
    "cartes/47.png",
    "cartes/48.png",
    "cartes/49.png",
    "cartes/50.png",
    "cartes/51.png",
    "cartes/52.png",
]



let afficher = document.getElementById("afficher");
let brasser = document.getElementById("brasser");
let carte = document.getElementById("carte")
// let row = document.getElementsById("row");
// let row1 = document.getElementsByClassName(".row1");
// let row2 = document.getElementsByClassName(".row2");
// let row3 = document.getElementsByClassName(".row3");

afficher.addEventListener("click", ()=>{
    
    carte.innerHTML = img[1].src;
    console.log(carte);
    
})

brasser.addEventListener("click", ()=>{
    
})