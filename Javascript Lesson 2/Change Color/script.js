document.getElementById("changeColorButton").addEventListener("click",function(){
const messageElement = document.getElementById("message");
if(messageElement.style.color === "blue"){
    messageElement.style.color = "red";
}else{
    messageElement.style.color = "blue";
}
});