class studentProfile{
    
    constructor(sId, sName){
        this.id = sId;
        this.name = sName
        this.school = 'Adarsha School, Narayanganj';
    }
}

const student1 = new studentProfile(101, 'Abir Hossain');
const student2 = new studentProfile(102, 'Fahad Hasan');

console.log(student1.name);
console.log(student2.id);