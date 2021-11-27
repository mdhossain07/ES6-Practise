const students = [
    {id: 101, name: "ABC"},
    {id: 102, name : "XYZ"},
    {id: 103, name : "MNO"}
]

const names = students.map( s => s.name);
console.log(names);

const info = students.filter( s => s.id > 101);
console.log(info);

const singleInfo = students.find( s => s.id > 101);
console.log(singleInfo);




// const allNames = []

// for (let i = 0; i < students.length; i++){
//     const info = students[i];
//     //const studentName = info.name;
//     allNames.push(info.name);
// }
//console.log(allNames);
