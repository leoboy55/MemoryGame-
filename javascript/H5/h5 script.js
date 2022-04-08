pics = document.getElementById("pics");
creatPictureHolder();
createPandaImages();

function creatPictureHolder() {
    for (let i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}
function createPandaImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (let i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className ="favoriet";
        favoriet.id = "favoriet_" + (i + 1);
        pandaplaatje = document.createElement("img");
        pandaplaatje.src = "source/panda" + (i +1) + ".jpg";
        pandaplaatje.id = (i+1);
        pandaplaatje.addEventListener("click", function () {
            maakfavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(pandaplaatje);
    }
}
function maakfavoriet(id) {
    console.log("het werkt! het gaat om panda ..." + id );
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (let i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage="none";
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage="url('source/heart.png')";
}
