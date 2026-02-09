// GameOverScene - Display results and restart option
// Similar to Unity's game over screen scene
class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }
    
    init(data) {
        // Receive score from GameScene
        this.finalScore = data.score || 0;
        
        // Load/save high score from localStorage
        this.highScore = parseInt(localStorage.getItem('obstacleHighScore')) || 0;
        
        // Check if new high score
        this.isNewHighScore = this.finalScore > this.highScore;
        
        if (this.isNewHighScore) {
            this.highScore = this.finalScore;
            localStorage.setItem('obstacleHighScore', this.highScore);
        }
    }
    
    create() {
        // Game Over title
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            150,
            'GAME OVER',
            { fontSize: '48px', fill: GameConstants.COLOR_RED, fontStyle: 'bold' }
        ).setOrigin(0.5);
        
        // Final Score
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            230,
            'Score',
            { fontSize: '18px', fill: GameConstants.COLOR_WHITE }
        ).setOrigin(0.5);
        
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            260,
            this.finalScore.toString(),
            { fontSize: '36px', fill: GameConstants.COLOR_CYAN, fontStyle: 'bold' }
        ).setOrigin(0.5);
        
        // High Score
        const highScoreColor = this.isNewHighScore ? GameConstants.COLOR_GREEN : GameConstants.COLOR_YELLOW;
        const highScoreText = this.isNewHighScore ? 'NEW HIGH SCORE!' : 'High Score';
        
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            320,
            highScoreText,
            { fontSize: '18px', fill: highScoreColor, fontStyle: 'bold' }
        ).setOrigin(0.5);
        
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            350,
            this.highScore.toString(),
            { fontSize: '28px', fill: highScoreColor }
        ).setOrigin(0.5);
        
        // New high score celebration effect
        if (this.isNewHighScore) {
            this.createCelebrationEffect();
        }
        
        // Buttons
        this.createButtons();
    }
    
    createButtons() {
        // Restart button
        const restartButton = this.add.text(
            GameConstants.GAME_WIDTH / 2,
            450,
            'PLAY AGAIN',
            { fontSize: '24px', fill: GameConstants.COLOR_GREEN, fontStyle: 'bold' }
        ).setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
            this.scene.start('GameScene');
        })
        .on('pointerover', () => {
            restartButton.setScale(1.1);
        })
        .on('pointerout', () => {
            restartButton.setScale(1);
        });
        
        // Menu button
        const menuButton = this.add.text(
            GameConstants.GAME_WIDTH / 2,
            500,
            'Main Menu',
            { fontSize: '18px', fill: GameConstants.COLOR_WHITE }
        ).setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
            this.scene.start('MenuScene');
        })
        .on('pointerover', () => {
            menuButton.setScale(1.1);
        })
        .on('pointerout', () => {
            menuButton.setScale(1);
        });
        
        // Keyboard shortcuts
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
        
        this.input.keyboard.once('keydown-ESC', () => {
            this.scene.start('MenuScene');
        });
        
        // Hint text
        this.add.text(
            GameConstants.GAME_WIDTH / 2,
            560,
            'SPACE to restart | ESC for menu',
            { fontSize: '12px', fill: '#888888' }
        ).setOrigin(0.5);
    }
    
    createCelebrationEffect() {
        // Create particle-like celebration effect
        const particles = [];
        const colors = [0xFFD700, 0xFFA500, 0xFF69B4, 0x00FF00, 0x00FFFF];
        
        for (let i = 0; i < 30; i++) {
            const x = GameConstants.GAME_WIDTH / 2;
            const y = 350;
            const color = Phaser.Utils.Array.GetRandom(colors);
            
            const particle = this.add.rectangle(x, y, 8, 8, color);
            
            const angle = (i / 30) * Math.PI * 2;
            const speed = Phaser.Math.Between(100, 200);
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            
            this.tweens.add({
                targets: particle,
                x: x + vx,
                y: y + vy,
                alpha: 0,
                duration: 1500,
                ease: 'Cubic.easeOut',
                onComplete: () => particle.destroy()
            });
        }
    }
}
