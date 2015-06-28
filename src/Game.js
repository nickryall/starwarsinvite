function keystoneAndDisplayImageH(ctx, img, scalingFactor, numSlices) {
    var h = img.height, w = img.width,
     
    // how much should every slice be scaled in width?
    widthScale = (1 - scalingFactor) / numSlices;
     
    // height of each slice
    sliceHeight = h / numSlices;
     
    // iterate over all slices      
    for (var n = 0; n < numSlices; n++) {
         
        // source - where to take the slices from
        var sx = 0,
            sy = sliceHeight * n,
            sWidth = w,
            sHeight = sliceHeight;
        // destination - where to draw the new slices
        var dx = (w * widthScale * (numSlices - n)) / 2,
            dy = sliceHeight * n,
            dWidth =  w * (1 - (widthScale * (numSlices - n))),
            dHeight = sliceHeight;
        ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
}



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
            //this.music = this.game.add.audio('music');
            //this.music.play();

            this.introText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'A long time ago, in a galaxy\nfar far away...', {
                font: '40px "News Cycle"',
                fill: 'rgb(75, 213, 238)'
            });

            this.introText.anchor.setTo(0.5, 0.5);
            this.introTweenIn = this.game.add.tween(this.introText).from({ alpha: 0 }, 2000, Phaser.Easing.Linear.InOut );
            this.introTweenIn.onComplete.add(function() {
                this.introTweenOut = this.game.add.tween(this.introText).to({ alpha: 0 }, 250, Phaser.Easing.Linear.InOut, false, 6400);

            window.setTimeout(function() {

                this.logoText = this.game.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Louis\' 5th\nBirthday', {
                    font: '140px sf_distant_galaxyregular',
                    fill: '#000',
                    stroke: '#ff6',
                    strokeThickness: 10,
                    align: 'center'
                });
               
                this.logoText.anchor.setTo(0.5, 0.5);
                this.logoText.scale.setTo(1.5, 1.5);
                this.positionTween = this.game.add.tween(this.logoText).to({ y: '-50' }, 14000, Phaser.Easing.Linear.InOut, true);
                this.logoTween = this.game.add.tween(this.logoText.scale).to({ x: 0, y: 0 }, 12000, Phaser.Easing.Linear.In, true);
                this.alphaTween = this.game.add.tween(this.logoText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.In, true, 11000);

            }.bind(this), 6750);

            this.introTweenOut.start();
            }, this);

            this.introTweenIn.start();

        

            this.storyText = this.game.add.text(this.game.width * 0.5, this.game.height * 1.2, "EPISODE V - TIME FOR SCHOOL\nIt is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\n\nDuring the battle, Rebel spies managed to steal secret plans to the Empire's  weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\n\nPursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plan that can save her people and restore freedom to the galaxy....", {
                font: '700 50px "News Cycle"',
                fill: '#ff6',
                wordWrap: true,
                wordWrapWidth: this.game.width - 50
            });

            this.storyText.anchor.set(0.5, 0);

            window.setTimeout(function() {
                document.getElementById('game').classList.add('story');
            }.bind(this), 21000);

            this.storyTween = this.game.add.tween(this.storyText).to({ y: this.game.height * 0.1 }, 21000, Phaser.Easing.Linear.In, true, 16500);


            

        }.bind(this), 1000);
      


            

    },

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	}

};
