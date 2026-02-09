const game = new Phaser.Game(config);

// Add window resize handling for responsive design
window.addEventListener('resize', () => {

});

// Prevent context menu on right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Global game state manager (incase to share data between scenes)
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
