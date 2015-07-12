import app from 'ampersand-app';
import styles from './styles/main.styl';
import Boot from './states/boot';
import Preloader from './states/preloader';
import Opening from './states/opening';
import Info from './states/info';

// expose `app` to browser console
window.app = app;

app.extend({
  init() {
    this.fontFamily = 'Arial';
    this.game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', true, true);

    // Add the States your game has.
    // You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
    this.game.state.add('Boot', Boot);
    this.game.state.add('Preloader', Preloader);
    this.game.state.add('Opening', Opening);
    this.game.state.add('Info', Info);

    // Now start the Boot state.
    this.game.state.start('Boot');
  }
});

app.init();
