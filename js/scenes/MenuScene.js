// MenuScene - Main menu
// Similar to Unity's title screen scene
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }
    
    create() {
        // Game title
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            150,
            'OBSTACLE DODGE',
            { fontSize: '36px', fill: GameConstants.COLOR_CYAN, fontStyle: 'bold' }
        ).setOrigin(0.5);
        
        // Subtitle
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            200,
            'Stay Alive!',
            { fontSize: '18px', fill: GameConstants.COLOR_WHITE }
        ).setOrigin(0.5);
        
        // Instructions
        const instructions = [
            'Use Arrow Keys or A/D to move',
            'Dodge the red obstacles',
            'Survive as long as you can!',
            '',
            'Click anywhere to start'
        ];
        
        instructions.forEach((text, index) => {
            this.add.text(
                GameConstants.GAME_WIDTH / 2,
                300 + (index * 30),
                text,
                { fontSize: '14px', fill: GameConstants.COLOR_WHITE }
            ).setOrigin(0.5);
        });
        
        // Start game on click
        this.input.once('pointerdown', () => {
            this.scene.start('GameScene');
        });
        
        // Or press SPACE to start
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
        
        // Blinking "Click to Start" text
        const startText = this.add.text(
            GameConstants.GAME_WIDTH / 2,
            500,
            'CLICK TO START',
            { fontSize: '20px', fill: GameConstants.COLOR_GREEN, fontStyle: 'bold' }
        ).setOrigin(0.5);
        
        // Create blinking effect
        this.tweens.add({
            targets: startText,
            alpha: 0.3,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
    }
}
