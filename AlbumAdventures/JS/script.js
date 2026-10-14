/*--
        Full Name: Policarpio, Carlos Fernando P.
        Section: WD-202
        Activity: Album Adventures
        Date: 10/13/2026
--*/

var box = document.querySelector(".video");
var mv = document.getElementById("mv");
var btn = document.getElementById("playbtn");

btn.addEventListener("click", function () {
    mv.controls = true;
    mv.play();
});