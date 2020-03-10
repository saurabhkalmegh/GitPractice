const clickMebTN =  document.querySelector("#clickMeBtn")
const divBox =  document.querySelector(".alert")
const hidBtn =  document.querySelector("#hideBtn")
const showBtn =  document.querySelector("#showbtn")
const resetBtn =  document.querySelector("#reset")

clickMebTN.addEventListener('click',() => {
    
    divBox.innerHTML="Good Afternoon";
   // divBox.style.display = "none"
})
hidBtn.addEventListener('click',() => {
    divBox.style.display="none"

})
showBtn.addEventListener('click',() => {
    divBox.style.display="block"

})
resetBtn.addEventListener('click',() => {
    divBox.innerHTML=" "

})

var images = [ ] , x=0;
images [0] ="images3.jpg";
images [1] ="images2.jpg";
images [2] ="images4.jpg"
setInterval(() => {
    console.log("image")
    var img = document.querySelector(".image")
    img.src= images[x];
    x++;
    if(x >= images.length)
    x=0;
}, 1000);
