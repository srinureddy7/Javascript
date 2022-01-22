//this will show the objects in array format

var student = [
    {name : "Ram",Age : 18},
    {name : "Karan", Age : 21},
    {name : "Rahul", Age: 19}
];
console.log(student);
for(a=0;a<student.length;a++){
    document.write(student[a].name+" "+student[a].Age+" ");
}