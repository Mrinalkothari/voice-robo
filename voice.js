const btn = document.querySelector(".talk"); //selecting talk button
const content = document.querySelector(".content");//selecting h3
//This is noxi will reply
const greetings = ["I am good, How are you?", "Doing good homeboi", "I am Great! , you tell?"];
const jokes = ["Never trust math teachers who use graph paper. They’re always plotting something.. Hahahaha", "I used to breed rabbits. Then I realized they can handle it themselves. Hahahaha", "Do you know Google requests me How to disable autocorrect in wife?... hahahaha"];

const Sr = window.SpeechRecognition || window.webkitSpeechRecognition; //activating speech recognition
var recognition = new Sr();
//On click what should it reply
recognition.onstart = function() {
    console.log("Voice is activated, You can speak to Noxy!");
}
//what will be the result of our click
recognition.onresult = function(event) {
var current = event.resultIndex;
var transcript = event.results[current][0].transcript; //storing our words in a variable 
content.textContent= transcript;
readOutLoud(transcript); //trascript is a method in speechRecohnition which stores what we said
}


//Add the listener to the button
btn.addEventListener("click", () => {
    recognition.start();
})

//JS is talking back to us
function readOutLoud(message){
    var speech = new SpeechSynthesisUtterance(); //Built-in fuction which help JS to talk to us

    speech.text = "Pardon!!"; // Default speech

        if(message.includes("how are you")) {
        var final = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = final;
        }else if(message.includes("joke")){
            var final = jokes[Math.floor(Math.random() * jokes.length)];
        speech.text = final;
        }else if(message.includes("your name")){
            speech.text = "My name is Noxi";
        }

    
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    //Now Noxi will speak
    window.speechSynthesis.speak(speech);
}