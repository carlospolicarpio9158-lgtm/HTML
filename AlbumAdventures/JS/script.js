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

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var number = document.getElementById("number").value.trim();
        var message = document.getElementById("message").value.trim();
        var errors = [];

        if (name === "") {
            errors.push("Please enter your name.");
        }
        if (email === "") {
            errors.push("Please enter your email.");
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        if (number !== "" && !/^[0-9+\-\s()]{7,}$/.test(number)) {
            errors.push("Please enter a valid contact number.");
        }
        if (message === "") {
            errors.push("Please type a message.");
        }

        if (errors.length > 0) {
            formmsg.className = "error";
            formmsg.innerHTML = errors.join("<br>");
        } else {
            form.reset();
            formmsg.className = "success";
            formmsg.textContent = "Thank you! Your message has been sent.";
        }
    });

    form.addEventListener("reset", function () {
        formmsg.className = "";
        formmsg.textContent = "";
    });
}