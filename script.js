// header background slider
let slideImg= document.getElementById("slide-img");

let images = new Array(
   "images/aerial-view-cargo-ship-cargo-container-harbor.jpg",
   "images/people-taking-care-warehouse-logistics.jpg",
   "images/truck-vehicle-with-trailers-background.jpg",
);

let len =images.length;
let i = 0;
function slider(){
    if(i > len -1){
     i = 0;   
    }
    slideImg.src=images[i];
    i++;
    setTimeout('slider()',3000);
}
// ends

// hambuger menu
let links=document.getElementById("navLinks");

function showMenu(){
    links.style.right="0"
};

function hideMenu(){
    links.style.right="-500px"
};
// ends


//model-overlay starts

const modelBtn = document.querySelector(".modal-btn");
const model = document.querySelector(".model-overlay");
const closeBtn = document.querySelector(".close-btn");

modelBtn.addEventListener('click', function(){
model.classList.add('open-model')
});
closeBtn.addEventListener('click', function(){
model.classList.remove('open-model')
});


const submit = document.getElementById("submit");

submit.addEventListener('click', function() {
let name = document.getElementById("name").value;

document.getElementById("score").innerText= name + " " + "Thank you for contacting us"  +  " "  + "Have a nice day!" ;
});

// 
// number counter animation
document.addEventListener("DOMContentLoaded",() =>{
 function counter( id, start , end, duration ){
   let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(()=>{
    current += increment;
    obj.textContent = current;
    if (current == end){
        clearInterval(timer);
    }}, step);
 } 
 counter("count1" , 200, 1000, 3000) ; 
  counter("count2" , 900, 1790, 1000) ; 
   counter("count3" , 300, 1225, 1000) ; 
    counter("count4" , 1500, 2345, 1000) ; 
} );
// nunmber counter animation ends
