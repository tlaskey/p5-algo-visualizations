let values = []

let i = 0;

function setup() {
    createCanvas(800, 500);
    for (let i = 0; i < width; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(0);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) swap(values, j, j + 1);
        }
    }
    else {
        print("finished!");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(255);
        line(i, 0, i, values[i]);
    }
}

function swap(values, a, b) {
    let temp = values[a];
    values[a] = values[b];
    values[b] = temp;
}