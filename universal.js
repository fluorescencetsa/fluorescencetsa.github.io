var count = 0;
function openmenu() {
    count += 1;
    if (count % 2 == 0) {
        document.getElementById("menu").style.height = "200px";
    }
    else {
        document.getElementById("menu").style.height = "1650px";
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

function getFileName(myFile){
    var file = myFile.files[0];  
    document.getElementById("filename").innerHTML = file.name;
 }

$('.question').on('click', function() {
    $('.answer').toggleClass('clicked');
    $('.arrow').toggleClass('clicked');
});
$('.question1').on('click', function() {
    $('.answer1').toggleClass('clicked');
    $('.arrow1').toggleClass('clicked');
});
$('.question2').on('click', function() {
    $('.answer2').toggleClass('clicked');
    $('.arrow2').toggleClass('clicked');
});
$('.question3').on('click', function() {
    $('.answer3').toggleClass('clicked');
    $('.arrow3').toggleClass('clicked');
});


