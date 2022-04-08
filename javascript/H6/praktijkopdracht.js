var fotosFrame = document.getElementById("fotosFrame");
var pictureHolder = document.createElement("div");
var pictures = document.getElementsByTagName("img");
var valueImage = document.getElementsByTagName("input");
var player1 = document.getElementById("speler1");
var player2 = document.getElementById("speler2");
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var playerswitcher = false;
var random = 0;
var randomNumbers1 = [];
var randomNumbers2 = [];
var click1 = 0;
var click2 = 0;
var clickListener1 = 20;
var clickListener2 = 21;
var clicktest1;
var clicktest2;
var bool1 = false;
var oneTurn = false;
var clickTracker = 0;

createPictureHolder();
createMemoryPictures();
createHiddenInputValues();

function createPictureHolder() {
    for (let i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        fotosFrame.appendChild(pictureHolder);
    }
}

function createMemoryPictures() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < pictureHolder.length; i++) {
        memoryAfbeeldingen = document.createElement("img");
        memoryAfbeeldingen.src = "source/ninja" + random + ".jpg";
        memoryAfbeeldingen.id = i;
        pictureHolder[i].appendChild(memoryAfbeeldingen);
    }
}

function createHiddenInputValues() {
    while (randomNumbers1.length < 9) {
        random = Math.floor(Math.random() * 9) + 1;
        if (randomNumbers1.lastIndexOf(random) == -1) {
            randomNumbers1.push(random);
        }
    }
    while (randomNumbers2.length < 9) {
        random = Math.floor(Math.random() * 9) + 1;
        if (randomNumbers2.lastIndexOf(random) == -1) {
            randomNumbers2.push(random);
        }
    }
    randomNumbers1.push(...randomNumbers2);

    random = 0;

    for (var plaatje in pictures) {
        pictures[plaatje].src = "source/ninja" + randomNumbers1[random] + ".jpg";
        random++;
    }
    pictureHolder = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < pictureHolder.length; i++) {
        hiddenvalue = document.createElement("input");
        hiddenvalue.style.visibility = "hidden";
        hiddenvalue.id = randomNumbers1[i];
        pictureHolder[i].appendChild(hiddenvalue);
        pictureHolder[i].addEventListener("click", function () {
            checkIdInput(this.children[0].id);
        });
    }
}
function checkIdInput(id) {
    clickTracker++;
    if (oneTurn == false) {
        if (clickTracker < 3) {
            if (click1 == 0 && click2 == 0) {
                if (bool1 == false) {
                    click1 = valueImage[id].id;
                    clickListener1 = pictureHolder[id].id;
                    clicktest1 = pictures[id];
                    clicktest1.style.visibility = "visible";
                    console.log("click1", click1);
                    console.log("click1 Listener" + clickListener1);
                    bool1 = true;
                }
            } else if (bool1 == true) {
                click2 = valueImage[id].id;
                clickListener2 = pictureHolder[id].id;
                clicktest2 = pictures[id];
                clicktest2.style.visibility = "visible";
                console.log("click2", click2);
                console.log("click2 Listener" + clickListener2);
                bool1 = false;
            }
            if (clickListener1 !== clickListener2) {
                if (click1 !== 0 && click2 !== 0) {
                    if (click1 !== null && click2 !== null) {
                        oneTurn = true;
                        clickListener2 = 21;
                        setTimeout("checkIdInputMatch(clicktest1, clicktest2)", 1000);
                    }
                }
            } else if (clickListener1 === clickListener2) {
                    clicktest1.style.visibility = "hidden";
                    click1 = 0;
                    click2 = 0;
                    clickListener1 = 20;
                    clickListener2 = 21;
                    oneTurn = false;
                    clickTracker = 0;
                    console.log("duplicate touch");
            }
        }
    }
}

function checkIdInputMatch(clicktest1, clicktest2){
        if (click1 === click2 && click1 !== 0) {
            if(playerswitcher == false) {
                scorePlayer1++;
                player1.innerText = "speler1: " + scorePlayer1 + " Score";
                console.log("there is a match", click1, click2);
            }
            else if (playerswitcher == true){
                scorePlayer2++;
                player2.innerText = "speler2: " + scorePlayer2 + " Score";
                console.log("there is a match", click1, click2);
            }
        }
        if (click1 !== click2) {
            if (playerswitcher == false) {
                clicktest1.style.visibility = "hidden";
                clicktest2.style.visibility = "hidden";
                console.log("there is no match", click1, click2);
            } else if (playerswitcher == true){
                clicktest1.style.visibility = "hidden";
                clicktest2.style.visibility = "hidden";
                console.log("there is no match", click1, click2);
            }
        }
        if(scorePlayer1 == 9){
            alert("you won!");
            window.location = "praktijkopdracht.html";
        } else if(scorePlayer1 > 6 && scorePlayer2 > 1){
            alert("Player 1 won!");
            window.location = "praktijkopdracht.html";
        } else if(scorePlayer2 > 6 && scorePlayer1 > 1){
            alert("Player 2 won!");
            window.location = "praktijkopdracht.html";
        }
    click1 = 0;
    click2 = 0;
    oneTurn = false;
    clickTracker = 0;
}
function switchPlayer() {
    if (playerswitcher == false){
        playerswitcher = true;
        alert("player 2 turn!")
    } else if (playerswitcher == true){
        playerswitcher = false;
        alert("player 1 turn!")
    }
}


