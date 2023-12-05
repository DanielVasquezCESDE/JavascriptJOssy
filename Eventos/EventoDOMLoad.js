let scrollVerticalActual = window.scrollY;
let scrollHorizontalActual = window.scrollX;

let iconoCargando = document.createElement("div");
document.body.appendChild(iconoCargando);

window.addEventListener("load", function(){
        iconoCargando.style.cssText = "position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999; background: url('loadingIcon.png') 50% 50% no-repeat rgb(249,249,249); opacity: .8;"

        setInterval(quitarCargando, 3000);
        function quitarCargando() {
             iconoCargando.style.display = "none"
        }
        
})



/*
functiondisable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
    functionenable() {
    window.onscroll = function() {};
    }*/