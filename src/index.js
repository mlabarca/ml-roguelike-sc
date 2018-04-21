import 'phaser';
import BootScene from './BootScene';
import MainScene from './MainScene';
import TitleScene from './TitleScene';


let config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
  scene: [
    BootScene,
    TitleScene,
    MainScene,
  ]
};

let game = new Phaser.Game(config);
