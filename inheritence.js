class Parent {
    constructor(){
        this.fatherName = "Saif Ali Khan";
        this.motherName = "Kareena Kapoor";
        this.motherName2 = "Amrita Singh";
    }
}

class Child extends Parent{
    constructor(baby){
        super();
        this.baby = baby;
    }
}
const boy = new Child("Taimur Ali Khan");
const girl = new Child("Sara Ali Khan");
console.log(boy);
console.log(girl);