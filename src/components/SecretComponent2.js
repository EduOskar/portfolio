function changeColor(color) {
  document.body.style.background = color;
  document.body.style.backgroundImage =
    "url('smiley.gif') blue repeat-x center";
}

export function easterEgg_Run() {
  changeColor("pink");
}

export function easterEggFix_Run() {
  changeColor("white");
}
