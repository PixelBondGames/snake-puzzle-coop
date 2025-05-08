
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#1d1d1d',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let snake = [];

const game = new Phaser.Game(config);

function preload() {
    // No image to load in this test version
}

function create() {
    const graphics = this.add.graphics({ fillStyle: { color: 0x00ff00 } });

    // Draw simple square segments to mimic snake body
    for (let i = 0; i < 10; i++) {
        graphics.fillRect(50 + i * 30, 100, 25, 25);
    }

    this.add.text(300, 400, 'Phaser is working!', { fontSize: '24px', fill: '#ffffff' });
}

function update() {
    // No update logic for this test
}
