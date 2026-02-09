# Obstacle Dodge Game

A simple HTML5 game built with Phaser 3 where players dodge falling obstacles.

## 🎮 How to Play

- Use **Arrow Keys** or **A/D** to move left and right
- Dodge the red falling obstacles
- Survive as long as possible to achieve a high score
- Game gets progressively harder as your score increases

## 🚀 Getting Started

### Option 1: Simple Setup
1. Open `index.html` in any modern web browser
2. That's it! No server required for local play

### Option 2: Local Web Server (Recommended for development)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
obstacle-dodge-game/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styling
├── js/
│   ├── main.js            # Game initialization
│   ├── config.js          # Phaser configuration
│   ├── scenes/            # Game scenes (like Unity scenes)
│   │   ├── BootScene.js   # Loading/initialization
│   │   ├── MenuScene.js   # Main menu
│   │   ├── GameScene.js   # Main gameplay
│   │   └── GameOverScene.js # End screen
│   ├── objects/           # Game objects (like Unity scripts)
│   │   ├── Player.js      # Player behavior
│   │   └── Obstacle.js    # Obstacle behavior
│   └── utils/
│       └── GameConstants.js # Game configuration values
└── assets/                # Assets folder (currently unused)
    ├── images/
    ├── sounds/
    └── fonts/
```

## 🔧 Unity to Phaser Comparison

| Unity Concept | Phaser Equivalent |
|--------------|------------------|
| Scene | Phaser.Scene |
| GameObject | Sprite/Rectangle |
| MonoBehaviour.Start() | Scene.create() |
| MonoBehaviour.Update() | Scene.update() |
| Prefab | Class with constructor |
| Inspector | Code constants/config |
| Rigidbody | Physics.Arcade body |
| OnTriggerEnter | physics.add.overlap |
| Input.GetKey | keyboard.createCursorKeys |
| Time.deltaTime | Handled automatically |

## 🎯 Features

- ✅ Progressive difficulty system
- ✅ High score tracking (localStorage)
- ✅ Scene management (Menu, Game, GameOver)
- ✅ Object-oriented structure
- ✅ Responsive controls
- ✅ Visual feedback and effects
- ✅ Modular, extensible code

## 🛠️ Customization

### Changing Game Settings
Edit `js/utils/GameConstants.js`:
```javascript
GAME_WIDTH: 400,        // Game width
GAME_HEIGHT: 600,       // Game height
PLAYER_SPEED: 300,      // Player movement speed
OBSTACLE_SPEED_START: 200, // Initial obstacle speed
```

### Adding New Features
1. **Power-ups**: Create `PowerUp.js` in `js/objects/`
2. **Sound effects**: Load in `BootScene.preload()`
3. **New obstacle types**: Extend the `Obstacle` class
4. **Particles**: Use Phaser's particle system

### Adding Images/Sprites
1. Place images in `assets/images/`
2. Load in `BootScene.preload()`:
   ```javascript
   this.load.image('player', 'assets/images/player.png');
   ```
3. Use in scenes:
   ```javascript
   this.add.image(x, y, 'player');
   ```

## 📝 Development Tips

### Debugging
- Set `debug: true` in `js/config.js` physics settings to see collision boxes
- Use browser console (F12) to see errors and logs
- Add `console.log()` statements to track game state

### Common Issues
1. **Black screen**: Check browser console for errors
2. **Objects not moving**: Verify physics is enabled
3. **Collisions not working**: Check physics body setup

## 🎨 Next Steps / Ideas

- [ ] Add different obstacle types (fast, slow, large, small)
- [ ] Add power-ups (shield, slow-mo, score multiplier)
- [ ] Add background music and sound effects
- [ ] Add particle effects
- [ ] Add multiple lives system
- [ ] Add combo system for consecutive dodges
- [ ] Add visual themes/skins
- [ ] Add leaderboard (requires backend)
- [ ] Mobile touch controls
- [ ] Replace shapes with actual sprite art

## 📚 Resources

- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Phaser Examples](https://phaser.io/examples)
- [Phaser Discord Community](https://discord.gg/phaser)

## 🤝 Unity Developers

Coming from Unity? Here's what you need to know:
- Scenes work similarly but are more code-focused
- No visual editor - everything is code
- Physics is simpler (2D only in Arcade)
- Asset pipeline is manual (no asset database)
- Deployment is easier (just HTML files)

## 📄 License

Free to use and modify for learning purposes!

---

**Made with Phaser 3** 🎮
