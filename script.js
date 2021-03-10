const jumper = document.getElementById('jumper')
const rock = document.getElementById('rock')
//
function jump (){
     if (jumper.classList != "animate") {
        jumper.classList.add("animate")
     } 
     setTimeout(()=> {
         jumper.classList.remove("animate")
     },700)
}


setInterval(() => {
    let jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top')) 
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left')) 
    if(rockLeft < 20 && rockLeft > 0 && jumperTop >= 280) {
        rock.style.animation = "none"
        alert("You lose")
    }
}, 10); 


