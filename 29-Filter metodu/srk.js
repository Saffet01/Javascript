const points = [70, 75, 25, 35, 10, 80, 27];

const studentPass = points.filter(point => {
    if(point >= 50){
        return point;
    }
    
})
console.log(studentPass);



//4 objden olusan bir dizi. dersi geçenleri görmek istersek
const students = [
    {name: 'can', passed : true},
    {name: 'tuba', passed : false},
    {name: 'elif', passed : false},
    {name: 'osman', passed : true},
];

const passedStudents = students.filter(student =>{
    return student.passed; //geçenler
    return !student.passed; // geçemeyenler
});

console.log(passedStudents);