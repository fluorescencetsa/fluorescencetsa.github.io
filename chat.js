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
            document.getElementById("message" + messagecount).style = "height: 100px; margin-top: 0px; display: flex; align-items: center;";
        }
        else {
            document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
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
    "JohnIsHappy",
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
    "GreenApples",
    "Anon",
    "Patrick",
    "Matthewlol",
    "blobdoodles",
    "TitaniumTweezer",
    "Smith",
    "Bernard",
    "Herbert",
    "Prendick",
    "misterpotatoes1",
    "Wallard Biggie",
    "RosiestTable533",
]

const userresponse = [
"Hello everyone!", 
"hi", 
"Hi! How are you?",
"I'm looking forward to the competition.",
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
"The weather is nice today",
"Who here is hyped!!",
"hey",
"sup",
"What pictures are you guys taking?",
"do you guys have any ideas yet",
"how did you come up with that username?",
"What is your favorite thing to photograph??",
"no",
"yes",
"whats up",
"hello",
"um",
"wow",
"lol",
"uh",
"why",
"I just submitted my photo!",
"me too",
"thats so cool",
"i had a great day today",
"thats crazy",
"facts",
"true",
"i agree",
"great!",
"haha",
"thats funny",
"i just got home",
"just ate my snack",
"i finally finished my work",
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
        document.getElementById("message" + messagecount).style = "height: 100px; margin-top: 0px; display: flex; align-items: center;";
    }
    else {
        document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
    }
    var elem = document.getElementById("messagebox");
    elem.scrollTop = elem.scrollHeight;
    setTimeout(botresponses, randomNumber(750, 4000));
}
setTimeout(botresponses, randomNumber(250, 3000));

