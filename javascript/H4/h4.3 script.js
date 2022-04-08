var afbeeldingen = [1,2,3,4,5,6,7,8,9]
teller = 1;

var afbeelding1 = document.getElementById("slideholder1");
afbeelding1.style.backgroundImage = "url('crook/hoofd1.jpg')";
var afbeelding2 = document.getElementById("slideholder2");
afbeelding2.style.backgroundImage = "url('crook/neus1.jpg')";
var afbeelding3 = document.getElementById("slideholder3");
afbeelding3.style.backgroundImage = "url('crook/mond1.jpg')";

afbeelding1.addEventListener("click", function () {
    afbeelding1.style.backgroundImage = "url('crook/hoofd" + getHoofd() +".jpg')";
})
afbeelding2.addEventListener("click", function () {
    afbeelding2.style.backgroundImage = "url('crook/neus" + getHoofd() +".jpg')";
} )
afbeelding3.addEventListener("click", function () {
    afbeelding3.style.backgroundImage = "url('crook/mond" + getHoofd() +".jpg')";
} )
function getHoofd(){
    if(teller >= 3) {
        teller=1;
    } else {
        teller++;
    }
    return teller;
}
