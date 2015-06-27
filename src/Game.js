


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
            this.introText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'A long time ago, in a galaxy\nfar far away... (West Auckland)', {
                font: '40px "News Cycle"',
                fill: 'rgb(75, 213, 238)'
            });

            this.introText.anchor.setTo(0.5, 0.5);
            this.introTweenIn = this.game.add.tween(this.introText).from({ alpha: 0 }, 2000, Phaser.Easing.Linear.InOut );
            this.introTweenIn.onComplete.add(function() {
                this.introTweenOut = this.game.add.tween(this.introText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.InOut, false, 6000);

                this.introTweenOut.onComplete.add(function() {

                this.logoText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Louis\' 5th\nBirthday', {
                    font: '140px sf_distant_galaxyregular',
                    fill: '#000',
                    stroke: '#FFFF00',
                    strokeThickness: 10,
                    align: 'center'
                });
               
                this.logoText.anchor.setTo(0.5, 0.5);
                this.logoText.scale.setTo(1.5, 1.5);
                //this.positionTween = this.game.add.tween(this.logoText).to({ y: '-150' }, 14000, Phaser.Easing.Linear.InOut, true);
                this.logoTween = this.game.add.tween(this.logoText.scale).to({ x: 0, y: 0 }, 12000, Phaser.Easing.Linear.In, true);
                this.alphaTween = this.game.add.tween(this.logoText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.In, true, 11000);

            }, this);

            this.introTweenOut.start();
            }, this);

            this.introTweenIn.start();


            // this.storyBitmapData = this.game.add.bitmapData(this.game.width, this.game.height);
            // this.storyBitmapData.addToWorld();
            // $(this.storyBitmapData.canvas).hide();

            // console.log($(this.storyBitmapData.canvas));

            // window.setTimeout(function() {
            //      $(this.storyBitmapData.canvas).css({
            //     display: 'none'
            // });

            // }.bind(this), 500);

           
            // this.storyBitmapData.canvas.style.display = 'none';

            // this.storyText = this.game.make.text(0 , 0, 'This is the first paragraph of the cool story for Louis Birthday Party...\n\nNulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.\n\nNulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.', {
            //     font: '30px "News Cycle"',
            //     fill: '#ff6',
            //     align: 'justify',
            //     wordWrap: true,
            //     wordWrapWidth: this.game.width
            // });

            // this.storyText.anchor.set(0.5, 0);
    
            // this.storyBitmapData.draw(this.storyText, this.game.width * 0.5, 350);

            

        }.bind(this), 1000);
    },

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	}

};
