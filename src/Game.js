
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {
        window.setTimeout(function() {
            //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
            this.introText = this.game.add.text(this.game.width/2, this.game.height/2, 'Louis\nTurns 5', {
                font: '200px sf_distant_galaxyregular',
                fill: '#000',
                stroke: '#FFFF00',
                strokeThickness: 10,
                align: 'center'
            });

            this.introText.anchor.setTo(0.5, 0.5);
            this.intoTween = this.game.add.tween(this.introText.scale).from({ x: 3, y: 3 }, 15000, Phaser.Easing.Linear.InOut, true);
        }.bind(this), 1000);
    },

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};
