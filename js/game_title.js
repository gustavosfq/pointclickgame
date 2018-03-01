
var gameTitle = {
	preload: function() {

	},

	create: function() {
		this.title = game.add.text(0,0, 'EL JUEGO DEL GUGA', { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		this.title.setTextBounds(0, 100, width, 100);

		this.start = game.add.text(0,0, 'START', { font: "bold 28px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		this.start.setTextBounds(0, 300, width, 300);

		this.start.inputEnabled = true;
		this.start.events.onInputDown.add(function() {
			game.state.start('stage1');
		})
				
	},

	update: function() {

	},

	render: function() {
		
	}
}