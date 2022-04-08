fotosFrame = document.getElementById("fotosFrame");
var pictures = document.getElementsByTagName("img");
var pictureHolder = document.getElementsByClassName("picture-holder");
var random = 0;
var randomNumbers1 = [];
var randomNumbers2 = [];
var matchingNinjas = [];

createPictureHolder();
createMemoryPictues();

function createPictureHolder() {
    for (let i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        fotosFrame.appendChild(pictureHolder);
    }
}
while(randomNumbers1.length < 9) {
    random = Math.floor (Math.random () * 9) +1;
   if (randomNumbers1.lastIndexOf(random) == -1) {
        randomNumbers1.push(random);
        randomNumbers2.push(random);
    }
}
    function createMemoryPictues() {
        pictureHolder = document.getElementsByClassName("picture-holder");
        for (let i = 0; i < 18; i++) {
            memoryAfbeeldingen = document.createElement("img");
            memoryAfbeeldingen.src = "source/ninja" + [i + 1] + ".jpg";
            memoryAfbeeldingen.id = (i);
            pictureHolder[i].appendChild(memoryAfbeeldingen);
            pictureHolder[i].addEventListener("click", function () {
                afbeeldingOnclick(this.children[0].id);
            });
        }
    }
    function afbeeldingOnclick(id) {
        afbeeldingclick = document.getElementsByTagName("img");
        afbeeldingclick[id].style.visibility = "visible";
    }

   random = 0;
   for (var plaatje in pictures) {
       console.log(plaatje);
       pictures[plaatje].src = "source/ninja" + randomNumbers1[random] + ".jpg";
       pictures[plaatje + 9].src = "source/ninja" + randomNumbers2[random] + ".jpg";
       random++;
    }
    function matchImages(){
        if (pictures.src = "source/ninja1.jpg" == "source/ninja10.jpg" ){
            console.log("match");
        } else {
            console.log("no match");
        }
   }










