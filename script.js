let NUMBERS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
let SUITES = ["♦", "♣", "♥", "♠"]
let list_cartes = []
let carte = document.querySelector(".carte")
for (var suit = 0; suit < 4 ; suit++){
    for (var number = 0; number < 13 ; number++){
        list_cartes.push(NUMBERS[number] + SUITES[suit]);
    }
}

let btn1 = document.querySelector(".creer_cartes");
btn1.addEventListener("click", function(){
    for(let i = 0; i < list_cartes.length; i++){
        const element = '<p>'+list_cartes[i]+'</p>';
        carte.innerHTML += "";
        carte.innerHTML += element;
    }
})

let btn2 = document.querySelector(".brasser")
btn2.addEventListener("click", function(){
    let half1 = []
    let half2 = []
    let new_list = []
    let result = document.querySelector(".result")
    half1 = (list_cartes.slice(list_cartes.length/2))
    half2 = (list_cartes.slice(0,-list_cartes.length/2))
    for (var i = 0; i <  half1.length; i++) {
        new_list .push( half1[i]);
        new_list .push( half2[i]);
    }
    for(let i = 0; i < new_list.length; i++){
        const element = '<p>'+new_list[i]+'</p>';
        result.innerHTML += "";
        result.innerHTML += element;
    } 
})


let images = [
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
];

let btn3 = document.querySelector(".creer_cartes_img")
let carte1 = document.querySelector(".carte1")
btn3.addEventListener("click", function(){
    for(let i = 0; i < images.length; i++){
        const element = '<img src="'+images[i]+'">'
        carte1.innerHTML += "";
        carte1.innerHTML += element;
    } 
})


let btn4 = document.querySelector(".brasser_img")
btn4.addEventListener("click", function(){
    let half1 = []
    let half2 = []
    let new_list = []
    let result1 = document.querySelector(".result")
    half1 = (images.slice(images.length/2))
    half2 = (images.slice(0,-images.length/2))
    for (var i = 0; i <  half1.length; i++) {
        new_list .push( half1[i]);
        new_list .push( half2[i]);
    }
    for(let i = 0; i < new_list.length; i++){
        const element = '<img src="'+new_list[i]+'">';
        result1.innerHTML += "";
        result1.innerHTML += element;
    } 
})



