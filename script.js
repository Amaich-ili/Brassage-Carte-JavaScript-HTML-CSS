
var images = [];
for (i = 0; i <= 51; i++) {
    val = i + 1;
    images[i]= "cartes/" + val + ".png";

}

 

function afficher()
{
    let result = document.querySelector(".result")
    result.innerHTML = "";
    for(let i = 0; i < images.length; i++){
        const element = '<img src="'+images[i]+'">';
        result.innerHTML += element;
    } 
}
afficher()


let btn = document.querySelector(".brasser_img")
btn.addEventListener("click", function(){
    let half1 = []
    let half2 = []
    let new_list = []
    let result = document.querySelector(".result")
    half1 = (images.slice(images.length/2))
    half2 = (images.slice(0,-images.length/2))
    for (var i = 0; i <  half1.length; i++) {
        new_list .push( half1[i]);
        new_list .push( half2[i]);
    }
    result.innerHTML = "";
    for(let i = 0; i < new_list.length; i++){
        const element = '<img src="' + new_list[i] + '">';
        result.innerHTML += element;   
        
    }    
})


