/*menu*/
var count = 0;
function openmenu() {
    count += 1;
    if (count % 2 == 0) {
        document.getElementById("menu").style.height = "200px";
    }
    else {
        document.getElementById("menu").style.height = "1900px";
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

}, 10);

/*back to top button*/
function scrolltop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*submit photo*/
function getFileName(myFile){
    var file = myFile.files[0];  
    document.getElementById("filename").innerHTML = file.name;
 }

 /*faqs*/
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
$('.question4').on('click', function() {
    $('.answer4').toggleClass('clicked');
    $('.arrow4').toggleClass('clicked');
});

/*login*/
function loginbutton() {
    localStorage.setItem("page", "." + "/" + window.location.pathname.split("/").pop());
    location.href="./login.html";
}

function login() {
    if (document.getElementById("username").value == "John" && document.getElementById("pass").value == "12345") {
        localStorage.setItem("logged", "My Account");
        location.href = String(localStorage.getItem("page"));
    }
    else {
        document.getElementById("error").style.color = "red";
    }
}

/*profile*/
function save() {
    un = document.getElementById("un").value
    fn = document.getElementById("fn").value
    ln = document.getElementById("ln").value
    em = document.getElementById("em").value
    ph = document.getElementById("ph").value
    ph2 = document.getElementById("ph2").value
    ph3 = document.getElementById("ph3").value
    ma = document.getElementById("ma").value
    ci = document.getElementById("ci").value
    st = document.getElementById("st").value
    zp = document.getElementById("zp").value
    
    if (un=="" || fn=="" || ln=="" || em=="" || ph=="" || ph2=="" || ph3=="" || ma=="" || ci=="" || st=="" || zp=="") {
        document.getElementById("message").style.color = "transparent";
        document.getElementById("error").style.color = "red";
    }
    else {
        localStorage.setItem("un", un);
        localStorage.setItem("fn", fn);
        localStorage.setItem("ln", ln);
        localStorage.setItem("em", em);
        localStorage.setItem("ph", ph);
        localStorage.setItem("ph2", ph2);
        localStorage.setItem("ph3", ph3);
        localStorage.setItem("ma", ma);
        localStorage.setItem("ci", ci);
        localStorage.setItem("st", st);
        localStorage.setItem("zp", zp);
        document.getElementById("error").style.color = "transparent";
        document.getElementById("message").style.color = "green";
    }
}

function logout() {
    localStorage.removeItem("logged");
    location.href = "./login.html";
}

/*participate*/
function scrollparticipate(ids){
    ids1 = document.getElementById(ids);
    if (window.screen.width < 1024) {
        scrollTo({top: ids1.offsetTop - 250, behavior: "smooth"});
    }
    else {
        scrollTo({top: ids1.offsetTop - 100, behavior: "smooth"});
    }
}
