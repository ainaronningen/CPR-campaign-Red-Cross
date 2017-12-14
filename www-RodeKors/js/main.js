var section1Elm = document.querySelector('#section1');
var section2Elm = document.querySelector('#section2');
var section3Elm = document.querySelector('#section3');
var section4Elm = document.querySelector('#section4');
var gotoSection2BtnList = document.querySelectorAll('.go-to-section2');

for(var i = 0; i < gotoSection2BtnList.length; i++){
    
    var gotoSection2Btn = gotoSection2BtnList[i];
    gotoSection2Btn.addEventListener('click', function(evt){
        gotoSection2();

    });
}

var videoElm    = document.querySelector('#introVideo');
var pulseElm    = document.querySelector('#heartbeat');
var kmElm       = document.querySelector('#distance');
var clockElm    = document.querySelector('#clock');

// Buttons section 3 and section 4
var btn1Elm     = document.querySelector('#btn1');
var btn2Elm     = document.querySelector('#btn2');
var btn3Elm     = document.querySelector('#btn3');
var btn4Elm     = document.querySelector('#btn4');


videoElm.addEventListener("timeupdate", function (evt) {

    var videoDuration = videoElm.currentTime;

    // raise heart rate
    if (videoDuration > 1) pulseElm.textContent = 79;
    if (videoDuration > 3.5) pulseElm.textContent = 82;
    if (videoDuration > 7) pulseElm.textContent = 83;
    if (videoDuration > 9.5) pulseElm.textContent = 81;
    if (videoDuration > 13.3) pulseElm.textContent = 133;
    if (videoDuration > 19) pulseElm.textContent = 131;
    if (videoDuration > 23) pulseElm.textContent = 127;
    if (videoDuration > 28) pulseElm.textContent = 129;
    if (videoDuration > 32) pulseElm.textContent = 0;
    
    // increase distance
    if (videoDuration > 13.3) kmElm.textContent = 10 + ':' + '12';
    if (videoDuration > 17.3) kmElm.textContent = 10 + ':' + '13';
    if (videoDuration > 23.3) kmElm.textContent = 10 + ':' + '14';
    if (videoDuration > 27.3) kmElm.textContent = 10 + ':' + '15';
    if (videoDuration > 33.3) kmElm.textContent = 10 + ':' + '16';
    
    // drop to 0
    if (videoDuration > 33) {
        pulseElm.textContent = 0;
        kmElm.textContent = 10 + ':' + '16';
        document.querySelector('.heart').classList.remove('anim');
    }
});

// Update clock function
function updateClock() {

    // Get current date/time
    var date = new Date();

    // Change the content of the #clock element
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clockElm.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Run the updateClock function once the script starts
updateClock();

// Call the updateClock function every 1000 milliseconds
setInterval(updateClock, 1000);


// Go to section 2 when video ends
videoElm.addEventListener("ended", function (evt) {

    setTimeout(gotoSection2, 15 * 1000);
});

function gotoSection2() {
    section2Elm.classList.remove('hidden');
    videoElm.pause();
    section1Elm.classList.add('hidden');
    var perfektElm = document.getElementById("feedback");
    perfektElm.innerHTML = "Start livredning";
    startReanimation();
}

// Life saving animation

function startReanimation() {
    var handELm = document.querySelector('.icn-hands');

    var lastClick;
    var counter = 0;
    var scoreCounter = 0;

    handELm.addEventListener('click', function () {

            var timeInMilli = (new Date).getTime();

            if (lastClick == undefined) {
                lastClick = timeInMilli;
                scoreCounter = 0;

            } else {

                var tempo = 60000 / (timeInMilli - lastClick);
                //console.log("tempo: "+ tempo);

                if (tempo < 90) {
                    var fasterElm = document.getElementById("feedback");
                    fasterElm.innerHTML = "Raskere";
                    console.log('raskere');
                }

                if ((tempo > 90) && (tempo < 115)) {
                    var perfektElm = document.getElementById("feedback");
                    perfektElm.innerHTML = "Perfekt rytme  - fortsett!";
                    console.log('perfekt');


                    if (counter > 15) scoreCounter++;
                }

                if (tempo > 115) {
                    var slowerElm = document.getElementById("feedback");
                    slowerElm.innerHTML = "Saktere";
                    console.log('saktere');
                }
                lastClick = timeInMilli;
            }
            counter++;

            if (counter > 30) {
                
                counter = 0;
                lastClick = undefined;
                
                if (scoreCounter > 10) {
                    
                    // start play music
                    var musicElm = document.getElementById("music");
                    musicElm.currentTime = 0;
                    musicElm.play();

                    // go to section 3
                    section3Elm.classList.remove('hidden');
                    section2Elm.classList.add('hidden');
                    console.log("Du har reddet et liv!");
                    
                } else {

                    // go to section 4
                    section4Elm.classList.remove('hidden');
                    section2Elm.classList.add('hidden');
                    console.log("Du trenger mer trening!");
                }
            }

            // play button anim
            tween = TweenLite.to(handELm, .1, {
                css: {
                    scale: .5
                },
                ease: Linear.easeNone
            });
            
            tween = TweenLite.to(handELm, .1, {
                css: {
                    scale: 1.3
                },
                ease: Linear.easeNone,
                delay: .13
            });
        });
    }


    // for testing only
//    setTimeout(gotoSection2, 100);


// When click on "prøv en gang til" in section 3
btn1Elm.addEventListener("click", function (evt) {
    setTimeout(gotoSection2From3, 100);
});

function gotoSection2From3() {
    
    section2Elm.classList.remove('hidden');
    section3Elm.classList.add('hidden');
    var musicElm = document.getElementById("music");
    musicElm.pause();
}


// When click on "Les mer om HRL" in section 3
btn2Elm.addEventListener("click", function (evt) {

var musicElm = document.getElementById("music");
    musicElm.pause();
});




// When click on "prøv en gang til" in section 4
btn3Elm.addEventListener("click", function (evt) {

    setTimeout(gotoSection2From4, 100);
});

function gotoSection2From4() {
    
    section2Elm.classList.remove('hidden');
    section4Elm.classList.add('hidden');
    var musicElm = document.getElementById("music");
    musicElm.pause();
}




