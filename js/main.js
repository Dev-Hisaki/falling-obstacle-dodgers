// Main.js - Game initialization
// This is the entry point that starts the Phaser game
// Similar to Unity's main game bootstrapper

// Initialize the game
const game = new Phaser.Game(config);

// Optional: Add window resize handling for responsive design
window.addEventListener('resize', () => {
    // You can add responsive logic here if needed
});

// Optional: Prevent context menu on right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Optional: Global game state manager (if you want to share data between scenes)
const GameState = {
    highScore: 0,
    musicEnabled: true,
    soundEnabled: true,
    
    loadHighScore() {
        this.highScore = parseInt(localStorage.getItem('obstacleHighScore')) || 0;
        return this.highScore;
    },
    
    saveHighScore(score) {
        if (score > this.highScore) {
            this.highScore = score;
            localStorage.setItem('obstacleHighScore', score);
        }
    }
};

// Log game start
console.log('Obstacle Dodge Game initialized!');
console.log('Phaser Version:', Phaser.VERSION);
