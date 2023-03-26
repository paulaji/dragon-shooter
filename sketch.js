let x;
let bullets = [];
let enemies = [];
let score = 0;

// function preload() {
//   // Ensure the .ttf or .otf font stored in the assets directory
//   // is loaded before setup() and draw() are called
//   // font = loadFont("PressStart2P-Regular.ttf");
// }

function preload() {
  imgDragon = loadImage("dragon1.png");
  imgBoulder = loadImage("boulder.png");
  imgFireball = loadImage("fireball.jpg");
}

function setup() {
  createCanvas(700, 675);
  // textFont(font);
  // textSize(fontsize);
  x = 0;
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-1200, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(51);
  rectMode(CENTER);
  image(imgDragon, mouseX, height - 100, 100, 75, 90);
  // x += 2;

  // move and draw the bullets
  for (let bullet of bullets) {
    bullet.y -= 10;
    image(imgFireball, bullet.x, bullet.y, 40, 30);
  }

  // creating enemies
  for (let enemy of enemies) {
    enemy.y += 1;
    image(imgBoulder, enemy.x, enemy.y, 75, 90);

    // losing condition
    if (enemy.y > height) {
      text("You Lose", 100, 300);
      // text("You Lose");
      noLoop();
    }
  }

  // killing enemies
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        score++;
        if (score == 10) {
          text("You Win", 100, 300);
          noLoop();
        }
      }
      // score++;
      console.log(score);
    }
  }
  text(score, 25, 25);
}

// bullets spawn on click
function mousePressed() {
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}

// if (x > width) {
//   x = 0;
// }

// function drawSpacecraft(x, y) {
//   push();
//   translate(x, y);
//   fill(200);
//   ellipse(0, 0, 60, 30); // Body
//   fill(255, 0, 0);
//   triangle(-30, -15, -30, 15, -50, 0); // Tail
//   fill(100);
//   rect(-20, -20, 20, 40); // Wing
//   pop();
// }
