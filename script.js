window.onload=screen
window.onresize=screen
function screen(){
    width=window.innerWidth
    document.getElementById("size").innerHTML="Width: "+ width + "px"
}