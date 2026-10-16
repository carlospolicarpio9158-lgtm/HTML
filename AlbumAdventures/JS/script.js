/*--
        Full Name: Policarpio, Carlos Fernando P.
        Section: WD-202
        Activity: Album Adventures
        Date: 10/10/2026
--*/
//burger
var header = document.querySelector("header");
var burger = document.getElementById("burger");

burger.addEventListener("click", function () {
    var open = header.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    burger.innerHTML = open ? "&#10005;" : "&#9776;";
});

//video and music
var mv = document.getElementById("mv");
if (mv) {
    var box = document.querySelector(".video");
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

    cards.forEach(function (card) {
        var button = card.querySelector(".play");
        var song = card.querySelector("audio");

        button.addEventListener("click", function () {
            if (song.paused) {
                stopSongs(song);
                mv.pause();
                song.play();
            } else {
                song.pause();
            }
        });

        song.addEventListener("play", function () {
            button.innerHTML = "&#10074;&#10074;";
            card.classList.add("playing");
        });

        song.addEventListener("pause", function () {
            button.innerHTML = "&#9654;";
            card.classList.remove("playing");
        });

        song.addEventListener("ended", function () {
            button.innerHTML = "&#9654;";
            card.classList.remove("playing");
        });
    });
}
//contact
var form = document.querySelector(".form");
if (form) {
    var formmsg = document.getElementById("formmsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.reset();
        formmsg.className = "success";
        formmsg.textContent = "Thank you! Your message has been sent.";
    });

    form.addEventListener("reset", function () {
        formmsg.className = "";
        formmsg.textContent = "";
    });
}