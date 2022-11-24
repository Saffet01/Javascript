const points = [70, 75, 25, 35, 10, 80, 27];

const result = points.reduce((value, point) => {
    if(point > 50) {
        value ++;
    }
    return value;
},0);

console.log(result);

