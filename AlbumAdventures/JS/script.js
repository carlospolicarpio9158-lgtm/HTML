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

mv.addEventListener("play", function () {
    box.classList.add("playing");
    stopSongs(null);
});

mv.addEventListener("ended", function () {
    box.classList.remove("playing");
    mv.controls = false;
    mv.load();
});

var cards = document.querySelectorAll(".tracksong");

function stopSongs(except) {
    cards.forEach(function (card) {
        var song = card.querySelector("audio");
        if (song !== except) {
            song.pause();
            song.currentTime = 0;
        }
    });
}