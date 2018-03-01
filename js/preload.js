
var preload = {
	preload: function() {
		game.load.image('doge', 'img/doge.png');
		game.load.image('blue', 'img/circle_blue.png');
		game.load.image('red', 'img/circle_red.png');
		game.load.image('explosion', 'img/explosion.png');
	},

	create: function() {
		game.state.start('game_title');
	},

	update: function() {

	},

	render: function() {
		
	},
}