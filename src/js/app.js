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

const MIN_ANOMALY_SEGMENTS = 4;
const MAX_ANOMALY_SEGMENTS = 7;

const drawCosmicAnomaly = (x, y) => {
  const anomalyMaxSize = Math.random() * 50 + 30;
  const anomalyColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;

  let currentSize = 0;

  // Animates the anomaly to grow in size
  const growIn = () => {
    currentSize += anomalyMaxSize * 0.03;
    ctx.filter = `blur(5px)`;

    ctx.beginPath();

    // Generate a random amount of sides between 4 and 7 for each anomaly
    const segments =
      Math.floor(
        Math.random() * (MAX_ANOMALY_SEGMENTS - MIN_ANOMALY_SEGMENTS + 1)
      ) + MIN_ANOMALY_SEGMENTS;

    // Create a random shape by drawing lines to random points
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * 2 * Math.PI;
      // Vary the radius
      const radius = Math.random() * currentSize;

      const pointX = x + Math.cos(angle) * radius;
      const pointY = y + Math.sin(angle) * radius;

      if (i === 0) ctx.moveTo(pointX, pointY);
      else ctx.lineTo(pointX, pointY);
    }

    ctx.closePath();

    // Fill the shape with the anomaly color
    ctx.fillStyle = anomalyColor;
    ctx.fill();

    if (currentSize < anomalyMaxSize) requestAnimationFrame(growIn);
  };

  growIn();
};

// Draw a cosmic anomaly on a random point of the canvas
const triggerCosmicAnomaly = () => {
  const x = Math.random() * backgroundCanvas.width;
  const y = Math.random() * backgroundCanvas.height;

  drawCosmicAnomaly(x, y);
};

// triggerCosmicAnomaly();
