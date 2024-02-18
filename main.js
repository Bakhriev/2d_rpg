import { GameLoop } from "./src/gameLoop";
import { resources } from "./src/resources";
import { Sprite } from "./src/sprite";
import { Vector2 } from "./src/vector2";

const canvas = document.querySelector(".game-canvas");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
	resource: resources.images.sky,
	frameSize: new Vector2(320, 180)
});

const groundSprite = new Sprite({
	resource: resources.images.ground,
	frameSize: new Vector2(320, 180)
});

const shadowSprite = new Sprite({
	resource: resources.images.shadow,
	frameSize: new Vector2(32, 32)
});

const heroSprite = new Sprite({
	resource: resources.images.hero,
	frameSize: new Vector2(32, 32),
	hFrames: 3,
	vFrames: 8,
	frame: 1
});

const heroPos = new Vector2(16 * 6, 16 * 5);

const update = () => {
	// Updating entities in the game
};

const draw = () => {
	skySprite.drawImage(ctx, 0, 0);
	groundSprite.drawImage(ctx, 0, 0);

	const heroOffset = new Vector2(-8, -21);
	const heroPosX = heroPos.x + heroOffset.x;
	const heroPosY = heroPos.y + heroOffset.y;

	shadowSprite.drawImage(ctx, heroPosX, heroPosY);
	heroSprite.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
