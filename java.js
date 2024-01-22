let randomletterbtn =document.getElementById("randomletter")
let randomletter=document.getElementById("generaterandomletter")
randomletterbtn.addEventListener("click", function() {
    let x = Math.floor(Math.random() * (90 -64)) + 65;
    let randomltr=String.fromCharCode(x);
    randomletter.innerHTML=`<label> ${randomltr} </label>  ` 
})
