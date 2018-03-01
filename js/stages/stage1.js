var url = 'https://github.com/gustavosfq/';

var score = 0;

var stage1 = {
	create: function() {
		this.blueMap = game.add.group();
		this.redMap = game.add.group();

		this.blueMap.enableBody = true;
		this.blueMap.physicsBodyType = Phaser.Physics.ARCADE;

		this.redMap.enableBody = true;
		this.redMap.physicsBodyType = Phaser.Physics.ARCADE;


		for(var i = 0; i<10; i++) {
			var blue = this.blueMap.create(-100, randomBetween(0, height - game.cache.getImage('blue').height * 0.2 ), 'blue')
			blue.enableBody = true;
			game.physics.enable(blue, Phaser.Physics.ARCADE)
			blue.body.velocity.x = randomBetween(300, 600);
			blue.checkWorldBounds = true;
			blue.events.onOutOfBounds.add(function(obj) {
				obj.position.x = -obj.width
			});

			console.log(blue)
			blue.inputEnabled = true;
			blue.events.onInputDown.add(function(obj) {
				obj.position.x = -obj.width;
				obj.position.y = randomBetween(0, height - game.cache.getImage('blue').height * 0.2 );
				score++;
			})
			blue.scale.setTo(0.2);
		}	

		for(var i = 0; i<5; i++) {
			var red = this.blueMap.create(-100, randomBetween(0, height - game.cache.getImage('red').height * 0.2 ), 'red')
			red.enableBody = true;
			game.physics.enable(red, Phaser.Physics.ARCADE)
			red.body.velocity.x = randomBetween(300, 600);
			red.checkWorldBounds = true;
			red.events.onOutOfBounds.add(function(obj) {
				obj.position.x = -obj.width
			});

			console.log(red)
			red.inputEnabled = true;
			red.events.onInputDown.add(function(obj) {
				obj.position.x = -obj.width;
				obj.position.y = randomBetween(0, height - game.cache.getImage('red').height * 0.2 );
				score--;
			})
			red.scale.setTo(0.2);
		}	

		//this.blue = game.add.sprite(100, randomBetween(0, height - game.cache.getImage('blue').height), 'blue')
		//this.blueMap.scale.setTo(0.2)

	},

	update: function() {

	},

	render: function() {
		game.debug.text(score.toString() + ' puntos', 20, 20)
	}
}