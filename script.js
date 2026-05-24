const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loosuBtn = document.getElementById("loosuBtn");
const gallery = document.getElementById("gallery");

/* YES Button Move */
yesBtn.addEventListener("mouseover", () => {

  yesBtn.style.top = Math.random() * 80 + "px";
  yesBtn.style.left = Math.random() * 220 + "px";

});

/* NO Button Move */
noBtn.addEventListener("mouseover", () => {

  noBtn.style.top = Math.random() * 80 + "px";
  noBtn.style.left = Math.random() * 220 + "px";

});

/* Open Gallery */
loosuBtn.addEventListener("click", () => {

  gallery.style.display = "flex";

  gallery.scrollIntoView({
    behavior:"smooth"
  });

});