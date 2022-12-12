document.querySelector('body').style.margin = 0;
document.querySelector('body').style.overflow = 'hidden'

const canvasDOM = document.querySelector('canvas');
canvasDOM.style.backgroundColor = "aliceblue";

const WIDTH = (canvasDOM.width = innerWidth);
const HEIGHT = (canvasDOM.height = innerHeight);

const canvas = canvasDOM.getContext('2d');

const colorArray = [

    'red',
    'blue',
    'aqua',
    'black',
    'white',
    'green',
    'coral',
    'gray',
    'pink',
    'brown'
];

class Circle {

    constructor(x, y, r, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }


    draw = () => {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        canvas.fillStyle = this.color;
        canvas.fill();
    };

    update = () => {

        if (this.x + this.r > WIDTH || this.x - this.r < 0) {

            this.dx = -this.dx;
        }

        if (this.y + this.r > HEIGHT || this.y - this.r < 0) {

            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();

    };
}

const circleArray = [];
for (i = 0; i < 100; i += 1) {

    const r = 3;
    const x = Math.random() * (WIDTH - 2 * r) + r;
    const y = Math.random() * (HEIGHT - 2 * r) + r;
    const dx = Math.random() * 10;
    const dy = Math.random() * 10;
    circleArray.push(new Circle(x, y, dx, dy, r));
}
const animate = () => {

    requestAnimationFrame(animate);

    for (i = 0; i < circleArray.length; i += 1) {

        circleArray[i].update();
    }

}
animate();