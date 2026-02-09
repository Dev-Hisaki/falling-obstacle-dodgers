# 🚀 QUICK START GUIDE

## For Complete Beginners

### Step 1: Get the Files
You already have all the files! The complete project structure is ready.

### Step 2: Open the Game
**Easiest Method:**
1. Navigate to the `obstacle-dodge-game` folder
2. Double-click `index.html`
3. The game will open in your default browser
4. Play!

**For Development (Recommended):**
If you want to edit code and test changes:

**Option A - Using Python (if installed):**
```bash
cd obstacle-dodge-game
python -m http.server 8000
# Then open: http://localhost:8000
```

**Option B - Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option C - Using Node.js (if installed):**
```bash
cd obstacle-dodge-game
npx http-server
# Then open: http://localhost:8080
```

## Unity Developer? Here's What's Different

### File Organization
- **Unity**: Visual hierarchy in editor + script files
- **Phaser**: Everything is code files, organized by function

### Scene Management
```javascript
// Unity C#:
SceneManager.LoadScene("GameScene");

// Phaser JS:
this.scene.start('GameScene');
```

### Creating Objects
```javascript
// Unity C#:
GameObject player = Instantiate(playerPrefab);

// Phaser JS:
this.player = new Player(this, x, y);
```

### Game Loop
```javascript
// Unity C#:
void Start() { }
void Update() { }

// Phaser JS:
create() { }
update() { }
```

## Project Structure Explained

```
obstacle-dodge-game/
│
├── index.html                 ← Main file (open this!)
│
├── js/
│   ├── main.js               ← Initializes game
│   ├── config.js             ← Game settings
│   │
│   ├── scenes/               ← Like Unity scenes
│   │   ├── BootScene.js      ← Loading screen
│   │   ├── MenuScene.js      ← Main menu
│   │   ├── GameScene.js      ← Actual gameplay
│   │   └── GameOverScene.js  ← Game over screen
│   │
│   ├── objects/              ← Like Unity scripts
│   │   ├── Player.js         ← Player behavior
│   │   └── Obstacle.js       ← Obstacle behavior
│   │
│   └── utils/
│       └── GameConstants.js  ← Configuration values
│
├── css/
│   └── style.css             ← Visual styling
│
└── assets/                   ← Put your images/sounds here
    ├── images/
    └── sounds/
```

## Making Your First Changes

### 1. Change Game Speed
Edit `js/utils/GameConstants.js`:
```javascript
PLAYER_SPEED: 500,  // Was 300 - now faster!
```

### 2. Change Colors
Edit `js/utils/GameConstants.js`:
```javascript
PLAYER_COLOR: 0x0000ff,  // Blue player
OBSTACLE_COLOR: 0xffff00, // Yellow obstacles
```

### 3. Change Game Size
Edit `js/utils/GameConstants.js`:
```javascript
GAME_WIDTH: 600,   // Was 400
GAME_HEIGHT: 800,  // Was 600
```

### 4. Add Sound (when you have audio files)
1. Put MP3 file in `assets/sounds/`
2. In `BootScene.js` preload():
   ```javascript
   this.load.audio('hit', 'assets/sounds/hit.mp3');
   ```
3. In `GameScene.js` where collision happens:
   ```javascript
   this.sound.play('hit');
   ```

## Testing Your Changes
1. Save the file you edited
2. Refresh your browser (F5)
3. Changes will appear immediately!

## Common Issues

**Problem**: Black screen
**Solution**: Open browser console (F12) and check for errors

**Problem**: Changes not showing
**Solution**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Problem**: Game too fast/slow
**Solution**: Adjust values in GameConstants.js

## Next Steps - Adding Features

Want to add lives? Power-ups? Different obstacles?
Check the main README.md for detailed tutorials!

## Need Help?

1. Check browser console (F12) for errors
2. Read the full README.md
3. Visit Phaser 3 documentation: https://phaser.io/learn
4. Join Phaser Discord community

---

**Have fun! The game is fully functional and ready to play!** 🎮
