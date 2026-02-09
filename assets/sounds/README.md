# Sounds Folder

Place your audio assets here:
- Background music
- Sound effects (collision, score, etc.)
- UI sounds (click, hover)

Supported formats: MP3, OGG, WAV

Example loading in BootScene.js:
```javascript
this.load.audio('bgMusic', 'assets/sounds/background-music.mp3');
this.load.audio('hit', 'assets/sounds/hit.wav');
this.load.audio('score', 'assets/sounds/score.mp3');
```

Example playing in scenes:
```javascript
this.sound.play('hit');
this.bgMusic = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
this.bgMusic.play();
```
