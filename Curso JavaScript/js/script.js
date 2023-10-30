document.addEventListener("click", function(click){
    
    if(click.pointerId == 1){

        var element = document.querySelector("main");

        element.classList.toggle("hide");  

    }

})