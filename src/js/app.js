const BACKGROUND_STAR_SIZE = 2;
const BACKGROUND_STAR_COUNT = 500;
const BACKGROUND_STAR_COLOR = "#fff";

const backgroundCanvas = document.getElementById("canvas-background");
const ctx = backgroundCanvas.getContext("2d");

backgroundCanvas.width = window.innerWidth;
backgroundCanvas.height = window.innerHeight;

const generateStars = (count) => {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * backgroundCanvas.width;
    const y = Math.random() * backgroundCanvas.height;

    ctx.fillStyle = BACKGROUND_STAR_COLOR;
    ctx.fillRect(x, y, BACKGROUND_STAR_SIZE, BACKGROUND_STAR_SIZE);
  }
};

generateStars(BACKGROUND_STAR_COUNT);

let stardust = 0;

const CLICKABLE_BUTTON = document.getElementById("clicker-button");
const STARDUST_COUNT = document.getElementById("stardust-count");

const helpButton = document.getElementById("help-button");

CLICKABLE_BUTTON.addEventListener("click", () => {
  stardust++;

  console.log(`Stardust collected: ${stardust}`);

  STARDUST_COUNT.innerHTML = stardust;
});

helpButton.addEventListener("click", () => {
  console.log("Help button clicked!");
});
