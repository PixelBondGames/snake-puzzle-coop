const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#000',
    parent: 'phaser-game',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let image;
let snake = [];
let segmentCount = 256;
let segmentCols = 16;
let segmentRows = 16;

function preload() {
    this.load.image('source', 'Monkey.jpg');
}

function create() {
    image = this.textures.get('source').getSourceImage();
    
    const segmentWidth = image.width / segmentCols;
    const segmentHeight = image.height / segmentRows;

    for (let i = 0; i < segmentCount; i++) {
        const col = i % segmentCols;
        const row = Math.floor(i / segmentCols);
        const canvas = this.textures.createCanvas('segment-' + i, segmentWidth, segmentHeight).getContext();
        canvas.drawImage(image, col * segmentWidth, row * segmentHeight, segmentWidth, segmentHeight, 0, 0, segmentWidth, segmentHeight);
        this.textures.addCanvas('segment-' + i, canvas.canvas);

        const sprite = this.add.image(100 + (i % 16) * (segmentWidth * 0.6), 100 + Math.floor(i / 16) * (segmentHeight * 0.6), 'segment-' + i).setScale(0.6);
        snake.push(sprite);
    }
}

function update() {
    // movement logic will go here in next phase
}
