let values = [];

let i = 0;
let j = 0;

const NUM_CIRCLES = 20;

function setup() {
    createCanvas(800, 200);
    frameRate(30);

    let maxSize = width / NUM_CIRCLES;

    for (let i = 0; i < width / maxSize; i++) {
        let randDiameter = Math.floor(random(maxSize - 10) + 10);
        values[i] = randDiameter;
    }
}

function draw() {
    background('cyan');

    if (i < values.length) {
        if (j < values.length - i - 1) {
            if (values[j] > values[j + 1]) swap(values, j, j + 1);
            j++;
        }
        else {
            i++;
            j = 0;
        }
    }
    else {
        print("finished!");
        noLoop();
    }

    console.log('drawing...')
    for (let i = 0; i < values.length; i++) {
        stroke('black');
        let x1 = (i == 0) ? width / NUM_CIRCLES : i * width / NUM_CIRCLES;
        circle(x1, height - (width / NUM_CIRCLES), values[i])
    }
}

function swap(values, a, b) {
    let temp = values[a];
    values[a] = values[b];
    values[b] = temp;
}