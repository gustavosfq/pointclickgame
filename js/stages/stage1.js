var url = 'https://github.com/gustavosfq/';

var stage1 = {
	create: function() {
		this.angle = 0;
		this.dogeGroup = game.add.group();
		game.input.onTap.add(this.addDoge, this);
		this.text = game.add.text(20, height - 40, url, {
			fill: 'white'
		});
		this.text.inputEnabled = true;
		this.text.events.onInputDown.add(function() {
			window.open(url, '_blank');
		}, this);
	},

	update: function() {
		self = this;
		this.angle++;
		this.dogeGroup.forEach(function(doge) {
			doge.angle = self.angle;
		});
	},

	render: function() {
		
	},
	addDoge: function() {
		var doge = this.dogeGroup.create(game.world.randomX, game.world.randomY, 'doge');
		doge.inputEnabled = true;
		doge.input.enableDrag(true);
		doge.anchor.x = 0.5;
		doge.anchor.y = 0.5;
	}
}