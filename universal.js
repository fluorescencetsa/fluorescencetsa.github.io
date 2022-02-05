var count = 0;
function openmenu() {
    count += 1;
    if (count % 2 == 0) {
        document.getElementById("menu").style.height = "200px";
    }
    else {
        document.getElementById("menu").style.height = "1600px";
    }
    /* Odd = Open menu
       Even = Closed meun */
}

setInterval(function() {
    let width = window.screen.width;
    if (width < 1024 && count % 2 == 0) {
        document.getElementById("menu").style.height = "200px";
    }
    else if (width > 1024) {
        document.getElementById("menu").style.height = "65px";
    }
}, 1000);

function scrollContact() {
    let width = window.screen.width;
    if (width < 1024 && count % 2 != 0) {
        document.getElementById("menu").style.height = "200px";
    }
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
    count += 1;
}   

function scrolltop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
