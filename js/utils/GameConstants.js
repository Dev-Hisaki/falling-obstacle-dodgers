// Game Constants (similar to Unity's static configuration class)
const GameConstants = {
    // Game dimensions
    GAME_WIDTH: 400,
    GAME_HEIGHT: 600,
    
    // Player settings
    PLAYER_WIDTH: 40,
    PLAYER_HEIGHT: 40,
    PLAYER_SPEED: 300,
    PLAYER_COLOR: 0x00ff00,
    
    // Obstacle settings
    OBSTACLE_WIDTH: 30,
    OBSTACLE_HEIGHT: 30,
    OBSTACLE_COLOR: 0xff0000,
    OBSTACLE_SPEED_START: 200,
    OBSTACLE_SPAWN_RATE_START: 1500, // milliseconds
    OBSTACLE_SPAWN_RATE_MIN: 500,
    
    // Difficulty progression
    DIFFICULTY_INCREASE_INTERVAL: 100, // score points
    SPEED_INCREASE_AMOUNT: 20,
    SPAWN_RATE_DECREASE: 100,
    
    // Scoring
    POINTS_PER_DODGE: 10,
    
    // Colors
    COLOR_WHITE: '#ffffff',
    COLOR_GREEN: '#00ff00',
    COLOR_RED: '#ff0000',
    COLOR_YELLOW: '#ffff00',
    COLOR_CYAN: '#00ffff'
};
