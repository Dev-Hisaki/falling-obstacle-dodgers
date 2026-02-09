# Unity to Phaser 3 - Developer's Guide

## 🎯 Quick Reference for Unity Developers

### Core Concepts Comparison

| Concept | Unity (C#) | Phaser 3 (JavaScript) |
|---------|-----------|----------------------|
| **Project Entry** | Unity Editor opens project | Open index.html in browser |
| **Scene** | Scene file (.unity) | Phaser.Scene class |
| **GameObject** | GameObject with Components | Sprite/Rectangle/Image object |
| **Script** | MonoBehaviour class | Regular JS class or scene methods |
| **Prefab** | .prefab file | Class constructor pattern |
| **Inspector** | Unity Inspector panel | Code-based configuration |
| **Hierarchy** | Visual tree in editor | Code structure |
| **Asset Import** | Drag & drop | Manual file loading |
| **Build** | Build Settings → Build | Just use the HTML files |

### Lifecycle Methods

```javascript
// UNITY C#
public class GameController : MonoBehaviour {
    void Awake() { }      // Object initialization
    void Start() { }      // Before first frame
    void Update() { }     // Every frame
    void OnDestroy() { }  // Cleanup
}

// PHASER 3 JS
class GameScene extends Phaser.Scene {
    init() { }           // Scene initialization (like Awake)
    preload() { }        // Load assets
    create() { }         // Setup scene (like Start)
    update() { }         // Every frame
    shutdown() { }       // Cleanup (like OnDestroy)
}
```

### Creating Objects

```javascript
// UNITY
GameObject player = new GameObject("Player");
SpriteRenderer sr = player.AddComponent<SpriteRenderer>();
player.transform.position = new Vector3(0, 0, 0);

// PHASER
this.player = this.add.sprite(0, 0, 'player');
// or with simple shapes:
this.player = this.add.rectangle(x, y, width, height, color);
```

### Physics

```javascript
// UNITY
Rigidbody2D rb = player.AddComponent<Rigidbody2D>();
rb.velocity = new Vector2(5, 0);
rb.gravityScale = 0;

// PHASER
this.physics.add.existing(player);
player.body.setVelocity(5, 0);
// Gravity set in config, not per object
```

### Collision Detection

```javascript
// UNITY
void OnTriggerEnter2D(Collider2D other) {
    if (other.CompareTag("Enemy")) {
        // Handle collision
    }
}

// PHASER
this.physics.add.overlap(player, enemies, (p, e) => {
    // Handle collision
}, null, this);
```

### Input Handling

```javascript
// UNITY
if (Input.GetKey(KeyCode.A)) {
    transform.Translate(Vector3.left * speed * Time.deltaTime);
}

// PHASER
// Setup in create():
this.cursors = this.input.keyboard.createCursorKeys();
this.keyA = this.input.keyboard.addKey('A');

// In update():
if (this.cursors.left.isDown || this.keyA.isDown) {
    player.body.setVelocityX(-speed);
}
```

### Scene Management

```javascript
// UNITY
using UnityEngine.SceneManagement;
SceneManager.LoadScene("GameScene");

// PHASER
this.scene.start('GameScene');
this.scene.pause('GameScene');
this.scene.resume('GameScene');
```

### Time and Delta Time

```javascript
// UNITY
float speed = 5f;
transform.position += Vector3.right * speed * Time.deltaTime;

// PHASER
// Delta time handled automatically by physics
// For manual calculations:
const delta = this.game.loop.delta; // milliseconds
player.x += speed * (delta / 1000); // convert to seconds
```

### Coroutines vs Timers

```javascript
// UNITY
IEnumerator SpawnEnemy() {
    while (true) {
        Instantiate(enemyPrefab);
        yield return new WaitForSeconds(2f);
    }
}
StartCoroutine(SpawnEnemy());

// PHASER
this.time.addEvent({
    delay: 2000, // milliseconds
    callback: this.spawnEnemy,
    callbackScope: this,
    loop: true
});

// One-time delay:
this.time.delayedCall(2000, () => {
    // Do something
});
```

### Finding Objects

```javascript
// UNITY
GameObject enemy = GameObject.FindWithTag("Enemy");
Transform child = transform.Find("ChildObject");

// PHASER
// Use groups or arrays
this.enemies = this.physics.add.group();
// Or store references directly
this.player = new Player(this, x, y);
```

### Destroying Objects

```javascript
// UNITY
Destroy(gameObject);
Destroy(gameObject, 2f); // After 2 seconds

// PHASER
sprite.destroy();
// With delay:
this.time.delayedCall(2000, () => {
    sprite.destroy();
});
```

### Audio

```javascript
// UNITY
public AudioClip jumpSound;
AudioSource.PlayClipAtPoint(jumpSound, transform.position);

// PHASER
// In preload():
this.load.audio('jump', 'assets/sounds/jump.mp3');

// In create() or when needed:
this.sound.play('jump');

// Background music:
this.music = this.sound.add('bgMusic', { loop: true });
this.music.play();
```

### Saving Data

```javascript
// UNITY
PlayerPrefs.SetInt("HighScore", score);
int highScore = PlayerPrefs.GetInt("HighScore");

// PHASER (using browser localStorage)
localStorage.setItem('highScore', score);
const highScore = parseInt(localStorage.getItem('highScore'));
```

### Randomization

```javascript
// UNITY
int randomNum = Random.Range(0, 100);
float randomFloat = Random.Range(0f, 1f);

// PHASER
const randomNum = Phaser.Math.Between(0, 100);
const randomFloat = Phaser.Math.FloatBetween(0, 1);
```

### Tweening/Animation

```javascript
// UNITY (using DOTween)
transform.DOMove(new Vector3(0, 5, 0), 1f).SetEase(Ease.InOutQuad);

// PHASER
this.tweens.add({
    targets: sprite,
    y: 500,
    duration: 1000,
    ease: 'Quad.easeInOut'
});
```

### Camera

```javascript
// UNITY
Camera.main.orthographicSize = 5;
Camera.main.transform.position = new Vector3(0, 0, -10);

// PHASER
this.cameras.main.setZoom(2);
this.cameras.main.setPosition(x, y);
this.cameras.main.startFollow(player);
this.cameras.main.shake(200, 0.01); // Shake effect
```

## Key Differences to Remember

### 1. **No Visual Editor**
- Unity: Drag & drop in editor
- Phaser: Everything in code
- **Tip**: Use constants for positioning to make tweaking easier

### 2. **Coordinate System**
- Unity: Center origin (0,0) in middle
- Phaser: Top-left origin (0,0), can be changed per object with `.setOrigin()`

### 3. **Physics Engines**
- Unity: Box2D (robust, 2D/3D)
- Phaser: Arcade (simple, fast) or Matter.js (complex)
- **Tip**: Arcade physics is enough for most 2D games

### 4. **Asset Pipeline**
- Unity: Automatic import & management
- Phaser: Manual loading in preload()
- **Tip**: Organize assets in folders and use consistent naming

### 5. **Component System**
- Unity: Component-based architecture
- Phaser: Object-oriented or composition patterns
- **Tip**: Create classes for reusable game objects

### 6. **Deployment**
- Unity: Platform-specific builds (WebGL, Windows, etc.)
- Phaser: Works everywhere with a browser
- **Tip**: Just upload HTML files to any web host

## Advantages of Phaser

✅ Instant testing (no compile/build time)
✅ Cross-platform by default
✅ Lightweight and fast
✅ Easy deployment
✅ Great for web games
✅ Active community
✅ Free and open source

## When to Use Unity vs Phaser

**Use Unity when:**
- Building 3D games
- Need advanced physics
- Want visual editor
- Targeting mobile apps/consoles
- Need complex particle systems

**Use Phaser when:**
- Building 2D web games
- Want fast prototyping
- Need browser-based games
- Want easy deployment
- Prefer code-first approach

## Learning Path

1. ✅ Start with this project structure
2. 📖 Read Phaser 3 documentation
3. 🎮 Modify and experiment
4. 🚀 Build small projects
5. 🏆 Join game jams

## Helpful Resources

- **Official Docs**: https://photonstorm.github.io/phaser3-docs/
- **Examples**: https://phaser.io/examples
- **Labs**: https://labs.phaser.io/
- **Discord**: https://discord.gg/phaser
- **Forum**: https://phaser.discourse.group/

---

**Remember**: You already know game development concepts from Unity. Phaser is just a different tool for the same job! 🎮
