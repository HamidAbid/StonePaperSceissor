let uscore = 0;
let cscore = 0;
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let text = document.querySelector(".text-box");
let img=document.querySelectorAll("img");



function remove(a,b,c){
    img[a].classList.remove("win");
    img[a].classList.remove("loss");
    img[a].classList.remove("draw");
    img[b].classList.remove("win");
    img[b].classList.remove("loss");
    img[b].classList.remove("draw");
    img[c].classList.remove("win");
    img[c].classList.remove("loss");
    img[c].classList.remove("draw");

}


function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    
    return randomNumber;
    
};

function green(a,b) {
    img[a].classList.add("win");
 img[b].classList.add("loss");
    uscore++;
    user.innerText = uscore;
    text.innerText = "YOU WON";
    text.classList.add("green");
    text.classList.remove("red", "blue");

}
function draw(a) {
    img[a].classList.add("draw");
    text.innerText = "DRAW! TRY AGAIN";
    text.classList.add("blue");
    text.classList.remove("green", "red");
}
function red(a,b) {
    img[a].classList.add("win");
    img[b].classList.add("loss");
    cscore++;
    comp.innerText = cscore;
    text.innerText = "COMPUTER WON";
    text.classList.add("red");
    text.classList.remove("green", "blue");
    
}
let scissor = document.getElementById("scissor");
scissor.addEventListener(('click'), () => {

    var num = getRandomNumber();
remove(0,1,2);

    if (num == 3) {
        red(2,0);
       
      
    }
    else if (num == 2) {
        green(0,1);
       
    }
    else {
        draw(0);
        
    }
});
let paper = document.getElementById("paper");
paper.addEventListener(('click'), () => {
    remove(0,1,2);
    var num = getRandomNumber();

    if (num == 3) {
        green(1,2);
       
    }
    else if (num == 2) {
        draw(1);
       
    }
    else {
     
        red(0,1);
       
    }
});

let rock = document.getElementById("rock");
rock.addEventListener(('click'), () => {
    remove(0,1,2);
    var num = getRandomNumber();
    if (num == 3) {
        draw(2);
    
    }
    else if (num == 2) {
         red(1,2);
       
    }
    else {
        green(2,0);
    }
});
let sa=document.querySelector("#start");
sa.addEventListener('click',()=>{
    comp.innerText = "0";
    user.innerText = "0";
    uscore=0;
    cscore=0;
    remove(0,1,2);
    text.classList.remove("red", "blue","green");
    text.innerText = "PICK YOUR MOVE";
})


