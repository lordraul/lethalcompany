var soundies = document.getElementsByClassName("soundy-img");
var sounds = [];

var i = 0;
for(const soundy of soundies)
{
	sounds.push(new Audio(soundy.dataset.sfx));
	soundy.dataset.id = i;

	soundy.addEventListener("click", () => {
		var id = parseInt(soundy.dataset.id);
		console.log(soundy.dataset.id);
		sounds[id].play();
	});
	i++;
}
