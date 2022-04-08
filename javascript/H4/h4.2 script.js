var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 1;

var sliderholder = document.getElementById("slideholder");
sliderholder.style.backgroundImage = "url('source/panda1.jpg')";

sliderholder.addEventListener("click", function () {
    sliderholder.style.backgroundImage = "url('source/panda" + getPanda() +".jpg')";
})
function getPanda() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}
