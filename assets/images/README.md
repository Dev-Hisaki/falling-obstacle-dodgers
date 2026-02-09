# Images Folder

Place your image assets here:
- Player sprites
- Obstacle sprites
- Background images
- UI elements
- Particle textures

Supported formats: PNG, JPG, SVG

Example loading in BootScene.js:
```javascript
this.load.image('player', 'assets/images/player.png');
this.load.spritesheet('explosion', 'assets/images/explosion.png', {
    frameWidth: 32,
    frameHeight: 32
});
```
