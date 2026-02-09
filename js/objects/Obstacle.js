// Obstacle class - handles individual obstacle behavior
class Obstacle {
    constructor(scene, x, y, speed) {
        this.scene = scene;
        
        // Create obstacle sprite
        this.sprite = scene.add.rectangle(
            x,
            y,
            GameConstants.OBSTACLE_WIDTH,
            GameConstants.OBSTACLE_HEIGHT,
            GameConstants.OBSTACLE_COLOR
        );
        
        // Enable physics
        scene.physics.add.existing(this.sprite);
        
        // Set downward velocity
        this.sprite.body.setVelocityY(speed);
        
        // Reference to physics body
        this.body = this.sprite.body;
    }
    
    // Check if obstacle is off screen
    isOffScreen() {
        return this.sprite.y > GameConstants.GAME_HEIGHT + 50;
    }
    
    // Stop the obstacle
    stop() {
        this.body.setVelocity(0, 0);
    }
    
    // Destroy obstacle
    destroy() {
        this.sprite.destroy();
    }
    
    // Get sprite reference (for collision detection)
    getSprite() {
        return this.sprite;
    }
}
