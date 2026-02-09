// Main Phaser Game Configuration
// Similar to Unity's ProjectSettings
const config = {
  type: Phaser.AUTO,
  width: GameConstants.GAME_WIDTH,
  height: GameConstants.GAME_HEIGHT,
  parent: "game-container",
  backgroundColor: "#1a1a2e",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [BootScene, MenuScene, GameScene, GameOverScene],
};
