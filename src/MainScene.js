
class MainScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'MainScene'
    });
  }

  preload() {
    this.load.image('study', 'assets/img/study.png');
  }

  create() {
    // Add and play the music
    // this.music = this.sound.add('overworld');
    // this.music.play({ loop: true });


    // The map has one object layer with enemies as stamped tiles,
    // each tile has properties containing info on what enemy it represents.

    // this.keys will contain all we need to control Mario.
    // Any key could just replace the default (like this.key.jump)
    this.keys = {
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
    };

    const height = window.screen.availHeight;
    const width = window.screen.availWidth;
    const centerX = width / 2;
    const centerY = height / 2;
    const welcomeMessage = `Welcome to Phaser`;

    this.add.image(centerX, centerY * 1.2, 'study');

    this.add
      .text(centerX, centerY * 0.8, welcomeMessage, { font: "bold 19px Arial", fill: "#fff" })
      .setOrigin(0.5, 0.5);
    console.log("main scene");
  }

  update(time, delta) {

  }

}

export default MainScene;
