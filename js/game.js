// Original game from:
// http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
// Slight modifications by Gregorio Robles <grex@gsyc.urjc.es>
// to meet the criteria of a canvas class for DAT @ Univ. Rey Juan Carlos

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// princess image
var princessReady = false;
var princessImage = new Image();
princessImage.onload = function () {
	princessReady = true;
};
princessImage.src = "images/princess.png";

// stone image
var stoneReady = false;
var stoneImage = new Image();
stoneImage.onload = function () {
	stoneReady = true;
};
stoneImage.src = "images/stone.png";

// monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monsterSpeed = 100;
var princess = {};
var stone0 = {};
var stone1 = {};
var monster0 = {
	speed: monsterSpeed // movement in pixels per second
};
var monster1 = {
	speed: monsterSpeed // movement in pixels per second
};
var monster2 = {
	speed: monsterSpeed // movement in pixels per second
};
var princessesCaught = 0;
var level = 1;
// Handle keyboard controls
var keysDown = {};

//var stones[];
//var monsters[];
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

function areTheyTouching (obj1, obj2){
	if (obj1.x <= (obj2.x + 32)
		&& obj2.x <= (obj1.x + 32)
		&& obj1.y <= (obj2.y + 32)
		&& obj2.y <= (obj1.y + 32)){
			return true;
		}else{
			return false;
		}
};

function touchUp (obj){
	if (obj.y <= 0 + 32){
		return true;
	};
}

function touchBottom (obj){
	if (obj.y >= 480 - 65){
		return true;
	};
}

function touchRight (obj){
	if (obj.x >= 512 - 65){
		return true;
	};
}

function touchLeft (obj){
	if (obj.x <= 0 + 32){
		return true;
	};
}

//function monsMove (monst){
	//if
//}

// Reset the game when the player catches a princess
var reset = function () {

	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the princess somewhere on the screen randomly
	princess.x = 32 + (Math.random() * (canvas.width - 90));
	princess.y = 32 + (Math.random() * (canvas.height - 98));

	if (princessesCaught>=(level*10)){
			level++;
			monsterSpeed += 25;
	};

	ready = false;

	if (level == 1){
		// Si alguno de los objetos se solapan se vuelve a generar
		while (ready == false){
			   monster0.x = 32 + (Math.random() * (canvas.width - 90));
			   monster0.y = 32 + (Math.random() * (canvas.height - 98));
				 stone0.x = 32 + (Math.random() * (canvas.width - 90));
			   stone0.y = 32 + (Math.random() * (canvas.height - 98));
			   if(!areTheyTouching(princess,stone0)
					&& !areTheyTouching(princess,monster0)
			    && !areTheyTouching(monster0,stone0)){
						ready = true;
			   }
		}
	}else if (level == 2){
		while (ready == false){
			   monster0.x = 32 + (Math.random() * (canvas.width - 90));
			   monster0.y = 32 + (Math.random() * (canvas.height - 98));
				 monster1.x = 32 + (Math.random() * (canvas.width - 90));
			   monster1.y = 32 + (Math.random() * (canvas.height - 98));
				 stone0.x = 32 + (Math.random() * (canvas.width - 90));
			   stone0.y = 32 + (Math.random() * (canvas.height - 98));
			   if(!areTheyTouching(princess,stone0)
					&& !areTheyTouching(princess,monster0)
			    && !areTheyTouching(monster0,stone0)
					&& !areTheyTouching(princess,monster1)
 					&& !areTheyTouching(monster1,stone0)
 			    && !areTheyTouching(monster0,monster1)){
						ready = true;
			   }
		}
	}else if (level == 3){
		while (ready == false){
			   monster0.x = 32 + (Math.random() * (canvas.width - 90));
			   monster0.y = 32 + (Math.random() * (canvas.height - 98));
				 monster1.x = 32 + (Math.random() * (canvas.width - 90));
			   monster1.y = 32 + (Math.random() * (canvas.height - 98));
				 stone0.x = 32 + (Math.random() * (canvas.width - 90));
			   stone0.y = 32 + (Math.random() * (canvas.height - 98));
				 stone1.x = 32 + (Math.random() * (canvas.width - 90));
			   stone1.y = 32 + (Math.random() * (canvas.height - 98));
			   if(!areTheyTouching(princess,stone0)
					&& !areTheyTouching(princess,monster0)
			    && !areTheyTouching(princess,stone1)
					&& !areTheyTouching(princess,monster1)
 					&& !areTheyTouching(stone0,monster0)
 			    && !areTheyTouching(stone0,monster1)
					&& !areTheyTouching(stone0,stone1)
					&& !areTheyTouching(stone1,monster0)
 			    && !areTheyTouching(stone1,monster1)
					&& !areTheyTouching(monster0,monster1)
				){
						ready = true;
			   }
		}
	}else{
		while (ready == false){
			   monster0.x = 32 + (Math.random() * (canvas.width - 90));
			   monster0.y = 32 + (Math.random() * (canvas.height - 98));
				 monster1.x = 32 + (Math.random() * (canvas.width - 90));
			   monster1.y = 32 + (Math.random() * (canvas.height - 98));
				 monster2.x = 32 + (Math.random() * (canvas.width - 90));
				 monster2.y = 32 + (Math.random() * (canvas.height - 98));
				 stone0.x = 32 + (Math.random() * (canvas.width - 90));
			   stone0.y = 32 + (Math.random() * (canvas.height - 98));
				 stone1.x = 32 + (Math.random() * (canvas.width - 90));
			   stone1.y = 32 + (Math.random() * (canvas.height - 98));
			   if(!areTheyTouching(princess,stone0)
					&& !areTheyTouching(princess,monster0)
			    && !areTheyTouching(princess,stone1)
					&& !areTheyTouching(princess,monster1)
					&& !areTheyTouching(princess,monster2)
 					&& !areTheyTouching(stone0,monster0)
 			    && !areTheyTouching(stone0,monster1)
					&& !areTheyTouching(stone0,monster2)
					&& !areTheyTouching(stone0,stone1)
					&& !areTheyTouching(stone1,monster0)
 			    && !areTheyTouching(stone1,monster1)
					&& !areTheyTouching(stone0,monster2)
					&& !areTheyTouching(monster0,monster1)
					&& !areTheyTouching(monster0,monster2)
					&& !areTheyTouching(monster1,monster2)
				){
						ready = true;
			   }
		}
	}
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		if (!touchUp(hero)){	
			hero.y -= hero.speed * modifier;
		}	
		/*if (level >= 4){
			mover(monster2);
		}else if (level >= 2){
			mover(monster1);
		}else{
			mover(monster0);
		}*/
	}
	if (40 in keysDown) { // Player holding down
		if (!touchBottom(hero)){	
			hero.y += hero.speed * modifier;
		}
		/*if (level >= 4){
			mover(monster2);
		}else if (level >= 2){
			mover(monster1);
		}else{
			mover(monster0);
		}*/
	}
	if (37 in keysDown) { // Player holding left
		if (!touchLeft(hero)){
			hero.x -= hero.speed * modifier;
		}
		/*if (level >= 4){
			mover(monster2);
		}else if (level >= 2){
			mover(monster1);
		}else{
			mover(monster0);
		}*/
	}
	if (39 in keysDown) { // Player holding right
		if (!touchRight(hero)){
			hero.x += hero.speed * modifier;
		}
		/*if (level >= 4){
			mover(monster2);
		}else if (level >= 2){
			mover(monster1);
		}else{
			mover(monster0);
		}*/
	}

	if (83 in keysDown){ //s para guardar el nivel
		localStorage.setItem ("level", level);
		localStorage.setItem ("princessesCaught", princessesCaught);
	}

	if (76 in keysDown){ //l para cargar el nivel guardado
		level = localStorage.getItem ("level");
		princessesCaught = localStorage.getItem ("princessesCaught");
		reset()
	}

	// Are they touching?
	if (
		areTheyTouching(hero,princess)
	) {
		++princessesCaught;
		reset();
	}


	function touchStone(stone){
		if (
			areTheyTouching(hero,stone)
	                && 40 in keysDown ||
			areTheyTouching(hero,stone)
	                && 39 in keysDown

		) {
			hero.x -= 1;
			hero.y -= 1;
		}

		if (
			areTheyTouching(hero,stone)
	                && 38 in keysDown ||
			areTheyTouching(hero,stone)
	                && 37 in keysDown

		) {
			hero.x += 1;
			hero.y += 1;
		}
	}

	function touchMonst(monster){
		if(areTheyTouching(hero,monster)
		) {
			reset();
		}
	}

	touchStone(stone0);
	touchStone(stone1);
	touchMonst(monster0);
	touchMonst(monster1);
	touchMonst(monster2);
	//touchLimit(hero);
	//touchLimit(monster0);
	//touchLimit(monster1);
	//touchLimit(monster2);
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (princessReady) {
		ctx.drawImage(princessImage, princess.x, princess.y);
	}

	if (stoneReady){
		ctx.drawImage(stoneImage, stone0.x, stone0.y);
	}

	if (stoneReady){
		ctx.drawImage(stoneImage, stone1.x, stone1.y);
	}

	if (monsterReady){
		ctx.drawImage(monsterImage, monster0.x, monster0.y);
	}

	if (monsterReady){
		ctx.drawImage(monsterImage, monster1.x, monster1.y);
	}

	if (monsterReady){
		ctx.drawImage(monsterImage, monster2.x, monster2.y);
	}


	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Princesses caught: " + princessesCaught + " level: " + level, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

// Let's play this game!
reset();
var then = Date.now();
//The setInterval() method will wait a specified number of milliseconds, and then execute a specified function, and it will continue to execute the function, once at every given time-interval.
//Syntax: setInterval("javascript function",milliseconds);
setInterval(main, 1); // Execute as fast as possible
