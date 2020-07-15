let values = [];

let i = 0;
let j = 0;

const widthRect = 25;

function setup() {
    createCanvas(750, 500);
    frameRate(30);
    for (let i = 0; i < width / widthRect; i++) {
        values[i] = random(height);
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
        stroke(0, 0, 0);
        rect(i * widthRect, height - values[i], widthRect, values[i])
    }
}

function swap(values, a, b) {
    let temp = values[a];
    values[a] = values[b];
    values[b] = temp;
}