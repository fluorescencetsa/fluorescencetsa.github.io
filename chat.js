var currentmessage;
var messagecount = 0;

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
        document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
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
    "XxBigxX",
    "Eric123",
    "Richard123",
    "Joshua123",
    "Jerry123",
    "Harvyn123",
]

const userresponse = [
"Hello everyone!", 
"Hi.", 
"Good morning.", 
"Hi! How are you?",
"I'm looking forward to the competition.",
"I'm so excited for this!",
"I love this year's theme.",
"Good luck on your photos.",
"I love photography!",
"Photography is the best!",
"Today is a great day.",
"The weather is nice!",
"Where are you from?",
"Yes.",
"No.",]

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(function () {
    const randommesage = Math.floor(Math.random() * userresponse.length);
    const randomuser = Math.floor(Math.random() * users.length);
    messagecount +=1 ;
    var div = document.getElementById('message'),
    clone = div.cloneNode(true);
    clone.id = "message" + messagecount;
    document.getElementById("messagebox").appendChild(clone);
    document.getElementById("message" + messagecount).querySelector("#messageuser").innerHTML = users[randomuser];
    document.getElementById("message" + messagecount).querySelector("#messagemessage").innerHTML = userresponse[randommesage];
    document.getElementById("message" + messagecount).style = "height: 30px; margin-top: 0px; display: flex; align-items: center;";
    var elem = document.getElementById("messagebox");
    elem.scrollTop = elem.scrollHeight;
}, randomNumber(750, 4000));

