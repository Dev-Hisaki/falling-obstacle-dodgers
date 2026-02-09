// Player class - handles player object behavior
// Similar to a Player.cs script in Unity
class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        
        // Create player sprite (rectangle for now)
        this.sprite = scene.add.rectangle(
            x, 
            y, 
            GameConstants.PLAYER_WIDTH, 
            GameConstants.PLAYER_HEIGHT, 
            GameConstants.PLAYER_COLOR
        );
        
        // Enable physics
        scene.physics.add.existing(this.sprite);
        this.sprite.body.setCollideWorldBounds(true);
        
        // Reference to physics body for easier access
        this.body = this.sprite.body;
        
        // Player properties
        this.speed = GameConstants.PLAYER_SPEED;
        this.isAlive = true;
    }
    
    // Update method called every frame
    update(cursors, keys) {
        if (!this.isAlive) return;
        
        // Horizontal movement
        if (cursors.left.isDown || keys.A.isDown) {
            this.body.setVelocityX(-this.speed);
        }
        else if (cursors.right.isDown || keys.D.isDown) {
            this.body.setVelocityX(this.speed);
        }
        else {
            this.body.setVelocityX(0);
        }
    }
    
    // Called when player dies
    die() {
        this.isAlive = false;
        this.body.setVelocity(0, 0);
        this.sprite.fillColor = GameConstants.OBSTACLE_COLOR;
    }
    
    // Get player position
    getX() {
        return this.sprite.x;
    }
    
    getY() {
        return this.sprite.y;
    }
    
    // Destroy player object
    destroy() {
        this.sprite.destroy();
    }
}
