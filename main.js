import canvas, { CanvasGradient } from 'canvas';
import fs from 'fs';

function save(picture) {
    const buffer = picture.toBuffer();
    fs.writeFileSync('./image.png', buffer);
}

function main() {
    const picture = canvas.createCanvas(400,400);
    const context = picture.getContext('2d');
    let gradient = context.createLinearGradient(0, -100, 400, 400);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(.5, 'white');
        gradient.addColorStop(.7, 'blue');
    
    context.rotate(45 * Math.PI /180);
    context.fillStyle = gradient;
    context.fillRect(200, -100, 200, 200);





    save(picture);
}

main();
