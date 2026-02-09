// GameScene - Main gameplay
// Similar to Unity's main game scene
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
    
    init() {
        // Initialize game variables
        this.score = 0;
        this.obstacleSpeed = GameConstants.OBSTACLE_SPEED_START;
        this.spawnRate = GameConstants.OBSTACLE_SPAWN_RATE_START;
        this.obstacles = [];
    }
    
    create() {
        // Create player
        this.player = new Player(
            this,
            GameConstants.GAME_WIDTH / 2,
            GameConstants.GAME_HEIGHT - 50
        );
        
        // Setup input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = {
            A: this.input.keyboard.addKey('A'),
            D: this.input.keyboard.addKey('D')
        };
        
        // Score display
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '24px',
            fill: GameConstants.COLOR_WHITE,
            fontStyle: 'bold'
        });
        
        // High score display (you can save this to localStorage later)
        this.highScoreText = this.add.text(16, 46, 'High Score: 0', {
            fontSize: '16px',
            fill: GameConstants.COLOR_YELLOW
        });
        
        // Speed indicator
        this.speedText = this.add.text(
            GameConstants.GAME_WIDTH - 16,
            16,
            'Speed: 1x',
            {
                fontSize: '16px',
                fill: GameConstants.COLOR_CYAN
            }
        ).setOrigin(1, 0);
        
        // Start spawning obstacles
        this.obstacleTimer = this.time.addEvent({
            delay: this.spawnRate,
            callback: this.spawnObstacle,
            callbackScope: this,
            loop: true
        });
        
        // Spawn first obstacle immediately
        this.time.delayedCall(500, () => this.spawnObstacle());
    }
    
    update() {
        // Update player
        this.player.update(this.cursors, this.keys);
        
        // Update obstacles
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obstacle = this.obstacles[i];
            
            // Check if obstacle is off screen
            if (obstacle.isOffScreen()) {
                // Increase score
                this.score += GameConstants.POINTS_PER_DODGE;
                this.updateScore();
                
                // Remove obstacle
                obstacle.destroy();
                this.obstacles.splice(i, 1);
                
                // Check for difficulty increase
                this.checkDifficultyIncrease();
            }
            // Check collision with player
            else if (this.checkCollision(this.player.sprite, obstacle.getSprite())) {
                this.gameOver();
            }
        }
    }
    
    spawnObstacle() {
        // Random X position with padding from edges
        const padding = 20;
        const x = Phaser.Math.Between(
            padding,
            GameConstants.GAME_WIDTH - padding
        );
        
        // Create new obstacle
        const obstacle = new Obstacle(this, x, -20, this.obstacleSpeed);
        this.obstacles.push(obstacle);
    }
    
    checkCollision(sprite1, sprite2) {
        // Simple AABB collision detection
        const bounds1 = sprite1.getBounds();
        const bounds2 = sprite2.getBounds();
        
        return Phaser.Geom.Intersects.RectangleToRectangle(bounds1, bounds2);
    }
    
    updateScore() {
        this.scoreText.setText('Score: ' + this.score);
    }
    
    checkDifficultyIncrease() {
        // Increase difficulty every X points
        if (this.score % GameConstants.DIFFICULTY_INCREASE_INTERVAL === 0 && this.score > 0) {
            this.increaseDifficulty();
        }
    }
    
    increaseDifficulty() {
        // Increase obstacle speed
        this.obstacleSpeed += GameConstants.SPEED_INCREASE_AMOUNT;
        
        // Decrease spawn rate (spawn more frequently)
        if (this.spawnRate > GameConstants.OBSTACLE_SPAWN_RATE_MIN) {
            this.spawnRate -= GameConstants.SPAWN_RATE_DECREASE;
            
            // Restart timer with new rate
            this.obstacleTimer.destroy();
            this.obstacleTimer = this.time.addEvent({
                delay: this.spawnRate,
                callback: this.spawnObstacle,
                callbackScope: this,
                loop: true
            });
        }
        
        // Update speed display
        const speedMultiplier = (this.obstacleSpeed / GameConstants.OBSTACLE_SPEED_START).toFixed(1);
        this.speedText.setText('Speed: ' + speedMultiplier + 'x');
        
        // Visual feedback for difficulty increase
        this.cameras.main.shake(200, 0.005);
    }
    
    gameOver() {
        // Stop player
        this.player.die();
        
        // Stop obstacle spawning
        this.obstacleTimer.destroy();
        
        // Stop all obstacles
        this.obstacles.forEach(obstacle => obstacle.stop());
        
        // Go to game over scene
        this.time.delayedCall(1000, () => {
            this.scene.start('GameOverScene', { score: this.score });
        });
    }
}
