window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
<<<<<<< HEAD

  var myObstacles = [];
=======
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
  var n = 0;

  function startGame() {
    myGameArea.start();
    background = new Background('./images/bg.png');
    player = new Component(80, 50, "./images/flappy.png", 100, 110);
  }

  var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
      this.canvas.width = screen.width - screen.width * 0.3;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.getElementById("game-board").append(this.canvas);
      this.reqAnimation = window.requestAnimationFrame(updateGameArea);
    },
<<<<<<< HEAD
=======
    myObstacles: [],
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
    frames: 0,
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    score: function() {
      points = (Math.floor(this.frames / 5));
      this.context.font = '38px serif';
      this.context.fillStyle = 'white';
      this.context.fillText('Score: ' + points, 20, 50);
    },
    stop: function() {
      cancelAnimationFrame(this.reqAnimation);
      this.gameOver();
    },
    gameOver: function() {
      this.clear();
<<<<<<< HEAD
=======
      this.obstacles = [];
      this.frames = 0;
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
      this.context.fillStyle = "black";
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.font = '38px serif';
      this.context.fillStyle = 'red';
      this.context.fillText('Game Over!', 350, 230);
      this.context.fillStyle = 'white';
      this.context.fillText('Your final score: ' + points, 300, 280);
    }
  };

  function Background(source) {
    this.img = new Image();
    this.img.src = source;
    this.scale = 1.05;
    this.y = 0;
    this.dx = 0.5;
    this.imgW = this.img.width;
    this.imgH = this.img.height;
    this.x = 0;
    this.clearX = 0;
    this.clearY = 0;
    that = this;
    this.img.onload = function() {
      that.imgW = that.img.width * that.scale;
      that.imgH = that.img.height * that.scale;
      if (that.imgW > myGameArea.canvas.width) {
        that.x = myGameArea.canvas.width - that.imgW;
      }
      if (that.imgW > myGameArea.canvas.width) {
        that.clearX = that.imgW;
      } else {
        that.clearX = myGameArea.canvas.width;
      }
      if (that.imgH > myGameArea.canvas.height) {
        that.clearY = that.imgH;
      } else {
        that.clearY = myGameArea.canvas.height;
      }
    };
    this.draw = function() {
      ctx = myGameArea.context;
      if (that.imgW <= myGameArea.canvas.width) {
        if (that.x > myGameArea.canvas.width) {
          that.x = -that.imgW + that.x;
        }
        if (that.x > 0) {
          ctx.drawImage(that.img, -that.imgW + that.x, that.y, that.imgW, that.imgH);
        }
        if (that.x - that.imgW > 0) {
          ctx.drawImage(that.img, -that.imgW * 2 + that.x, that.y, that.imgW, that.imgH);
        }
      } else {
        if (that.x > (myGameArea.canvas.width)) {
          that.x = myGameArea.canvas.width - that.imgW;
        }
        if (that.x > (myGameArea.canvas.width - that.imgW)) {
          ctx.drawImage(that.img, that.x - that.imgW + 1, that.y, that.imgW, that.imgH);
        }
      }
      ctx.drawImage(that.img, that.x, that.y, that.imgW, that.imgH);
      that.x += that.dx;
    };
  }

  function Component(width, height, image, x, y) {
<<<<<<< HEAD
    n++;
    this.obstacleName = "obstacle" + n;
=======
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
    this.image = new Image();
    this.image.src = image;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += (this.speedY + this.gravitySpeed);
    };
    this.left = function() {
      return this.x;
    };
    this.right = function() {
      return (this.x + this.width);
    };
    this.top = function() {
      return this.y;
    };
    this.bottom = function() {
      return this.y + (this.height);
    };
    this.crashWith = function(obstacle) {
      return !((player.bottom() < obstacle.top()) ||
        (player.top() > obstacle.bottom()) ||
        (player.right() < obstacle.left()) ||
        (player.left() > obstacle.right()));
    };
    this.outOfCanvas = function(obstacle) {
      return ((player.bottom() > myGameArea.canvas.height) ||
        (player.top() < 0));
    };
  }

  function updateGameArea() {
<<<<<<< HEAD
    for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
=======
    for (i = 0; i < myGameArea.myObstacles.length; i += 1) {
      if (player.crashWith(myGameArea.myObstacles[i])) {
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
        myGameArea.stop();
        return;
      }
    }
    myGameArea.clear();
    myGameArea.frames += 1;
<<<<<<< HEAD
    if (myGameArea.frames % 300 === 0) {
=======
    if (myGameArea.frames % 120 === 0) {
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
      x = myGameArea.canvas.width;
      y = myGameArea.canvas.height;
      minHeight = 20;
      maxHeight = 200;
      height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      minGap = 150;
      maxGap = 300;
      gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
<<<<<<< HEAD
      myObstacles.push(new Component(70, height, "./images/obstacle_top.png", x, 0));
      myObstacles.push(new Component(70, (y - height - gap), "./images/obstacle_bottom.png", x, height + gap));
    }
    background.draw();
    for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].x += -1;
      myObstacles[i].update();
=======
      myGameArea.myObstacles.push(new Component(70, height, "./images/obstacle_top.png", x, 0));
      myGameArea.myObstacles.push(new Component(70, (y - height - gap), "./images/obstacle_bottom.png", x, height + gap));
    }
    background.draw();
    for (i = 0; i < myGameArea.myObstacles.length; i += 1) {
      myGameArea.myObstacles[i].x += -3;
      myGameArea.myObstacles[i].update();
>>>>>>> caeff81b7a6534a5f77243eaa17f252964591d68
    }
    player.newPos();
    player.update();
    myGameArea.score();
    if (player.outOfCanvas()) {
      myGameArea.stop();
      return;
    }
    myGameArea.reqAnimation = window.requestAnimationFrame(updateGameArea);
  }


  document.onkeydown = function(e) {
    if (e.keyCode == 32) {
      player.gravity = -0.2;
    }
  };

  document.onkeyup = function(e) {
    if (e.keyCode == 32) {
      player.gravity = 0.1;
    }
  };
};
