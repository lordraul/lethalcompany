var sfx = new Audio("sounds/flashbanggg.mp3");
var img = document.getElementById("img");

sfx.addEventListener("ended", () => {
    window.open("storeitems.html", "_self");
});

async function kablooey() {
    await setTimeout(() => {
        sfx.play();
        img.style.display = "none";
        document.getElementsByTagName("body")[0].style["background-color"] = "#fff";
        document.getElementsByTagName("body")[0].style.animation = "fade-to-black " + sfx.duration + "s";
    }, (Math.random() * 1500) + 500);
}