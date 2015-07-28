export default {
  init() {
    this.input.maxPointers = 1;
    this.disableVisibilityChange = false;
    this.game.stage.smoothed = true;

    if (this.game.device.desktop) {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
    } else {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      // this.scale.setMinMax(480, 260, 1024, 768);
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.forceOrientation(true, false);
      this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
      this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    }
  },

  create() {
    this.game.state.start('Preloader');
  },

  enterIncorrectOrientation() {
    document.getElementById('orientation').style.display = 'block';
  },

  leaveIncorrectOrientation() {
    document.getElementById('orientation').style.display = 'none';
  }
};


