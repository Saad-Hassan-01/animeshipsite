Draggable.create("#drag",{
    type:"x",
    bounds: ".container"
})

function checkOverlap(){
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector("#drag");
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();


    
    if(
        rect1.left < rect2.right
    ){
        document.querySelector("#v1").style.opacity = 0 
        document.querySelector("#text").style.opacity = 0,
        document.querySelector(".cir").style.transform ="rotate(-90deg)";
    }
    else{
        document.querySelector("#v1").style.opacity = 1
        document.querySelector("#text").style.opacity = 1
        document.querySelector(".cir").style.transform ="rotate(0deg)";
    }
}

window.addEventListener("mousemove",checkOverlap)