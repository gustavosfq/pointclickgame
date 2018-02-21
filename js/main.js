var height = window.innerHeight;
var width = window.innerWidth;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'game', this, false, false);

//set states
game.state.add('boot', boot);
game.state.add('preload', preload);
game.state.add('game_title', gameTitle);
game.state.add('game_over', gameOver);

//stages
game.state.add('stage1', stage1);

game.state.start('boot');