class Circle extends Phaser.Sprite{

	constructor(x, y, sprite){
		super(game, x, y, sprite);
		this.checkWorldBounds = true;
	}

}