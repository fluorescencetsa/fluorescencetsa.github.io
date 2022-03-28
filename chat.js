var currentmessage;
var messagecount = 0;
let screenwidth = window.screen.width;

function sendamessage() {
    var currentmessage = document.getElementById("sendmessage").value;
    if (currentmessage == "") {}
    else {
        messagecount +=1 ;
        var div = document.getElementById('message'),
        clone = div.cloneNode(true);
        clone.id = "message" + messagecount;
        document.getElementById("messagebox").appendChild(clone);
        document.getElementById("message" + messagecount).querySelector("#messageuser").innerHTML = "YOU";
        document.getElementById("message" + messagecount).querySelector("#messagemessage").innerHTML = currentmessage;
        if (screenwidth < 1024) {
            document.getElementById("message" + messagecount).style = "height: 100px; margin-top: 0px; display: flex; align-items: start; padding: 0;";
            document.getElementById("message" + messagecount).querySelector("#messageuser").style.color = "#4a86e8";
        }
        else {
            document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
            document.getElementById("message" + messagecount).querySelector("#messageuser").style.color = "#4a86e8";
        }
        document.getElementById("sendmessage").value = "";
        var elem = document.getElementById("messagebox");
        elem.scrollTop = elem.scrollHeight;
    }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        sendamessage()
    }
});


const users = [
    "JohnHappy",
    "XxNightxX",
    "eric",
    "Richardok",
    "Joshua",
    "Jadeeo",
    "Nyvrah",
    "Mr. Dee",
    "Adam444",
    "Fleero",
    "ItsMeHarry",
    "RoRoMcBow",
    "GreenApple",
    "Anon",
    "Patrick",
    "Matthewlol",
    "blobdood",
    "Smith",
    "Bernard",
    "Herbert",
    "Prendick",
    "mrpotato",
    "Wallard",
    "Rosytable",
    "bobby",
    "TheBest!",
    "liverock",
    "photoman",
    "wave",
    "wind",
    "cookie",
]

const userresponse = [
"Hello everyone!", 
"hi", 
"Hi! How are you?",
"I'm so excited for this!",
"I love this year's theme.",
"Good luck",
"I love photography!",
"Photography is the best!",
"Today is a great day.",
"idk",
"yeah",
"nope",
"i dont know",
"The weather is nice",
"Who here is hyped!!",
"hey",
"sup",
"do you have ideas?",
"no",
"yes",
"whats up",
"hello",
"um",
"lol",
"I just submitted!",
"me too",
"thats so cool",
"i had a great day today",
"thats crazy",
"facts",
"true",
"i agree",
"haha",
"i just got home",
"i finally finished work",
"oh yea i agree",
"what camera do you use?",
"I use an IPhone for photos",
]

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


var botresponses = function() {
    const randommesage = Math.floor(Math.random() * userresponse.length);
    const randomuser = Math.floor(Math.random() * users.length);
    messagecount +=1 ;
    var div = document.getElementById('message'),
    clone = div.cloneNode(true);
    clone.id = "message" + messagecount;
    document.getElementById("messagebox").appendChild(clone);
    document.getElementById("message" + messagecount).querySelector("#messageuser").innerHTML = users[randomuser];
    document.getElementById("message" + messagecount).querySelector("#messagemessage").innerHTML = userresponse[randommesage];
    if (screenwidth < 1024) {
        document.getElementById("message" + messagecount).style = "height: 100px; margin-top: 0px; display: flex; align-items: start; padding: 0;";
    }
    else {
        document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
    }
    var elem = document.getElementById("messagebox");
    elem.scrollTop = elem.scrollHeight;
    setTimeout(botresponses, randomNumber(750, 2500));
}
setTimeout(botresponses, randomNumber(250, 3000));

