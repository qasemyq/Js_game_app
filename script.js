const jumper = document.getElementById('jumper')
const rock = document.getElementById('rock')

function jump (){
     // inja migam age jumper class animate nadasht biya va behesh ezafe kon
     if (jumper.classList != "animate") {
    // inja migam har moge function jump farkhani shod classe animate ro be jumper ezae koni 
        jumper.classList.add("animate")
     } 
    // inja chon miyad va har 1s infinite animate ro ejra mikone pas miyam ye setTimeout midam behesh
    // migam bad az 700ms dg classe animate ro hajf kon 
     setTimeout(()=> {
         jumper.classList.remove("animate")
     },700)
}


// inja mikham tain konam key karbar mibaze 
setInterval(() => {
    // getComputedStyle yani biya hame stylehaie ke dadim be jumber ro begir va bad ba getPropertyValue top ro begir az dakhelesh 
    // chon kolle inro be adad mikham miyam va michepunamesh tuye parsInt ta adad beshe  
    let jumperTop = parseInt(window.getComputedStyle(jumper).getPropertyValue('top')) 
    let rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left')) 
    // agar leftemun beine 0 ta 20 bud va topemun yani jumper age az jash tekun nakhore bashe karbar bakhte 
    if(rockLeft < 20 && rockLeft > 0 && jumperTop >= 280) {
        // biyad animation ro neshun nade 
        rock.style.animation = "none"
        // va in ro alert kon 
        alert("You lose")
    }
}, 10); //10 mili saniye 


// setTimeout miyad miyad va agebegam bad az 1 saniye function ro ejra mikone 
// setInterval miyad va age begam 1 sayine har saynie miyad va function ro infinite ejra mikone 
