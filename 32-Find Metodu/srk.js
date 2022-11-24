const points = [70, 75, 25, 35, 10, 80, 27];

const highPoint = points.find(c => {
    return c>70;
});

console.log(highPoint);