const student = {

    Name : "Abir Hossain",
    Age : 20,
    Address : "Narayanganj",
    BloodGroup : "AB-",
    Id : 1012,
    FatherName : "ABC",
    MotherName : "XYZ",
    LocalGuardian : "MNO"

}


const {Address, Age, Name, LocalGuardian} = student;
console.log(Address, Age, Name, LocalGuardian);

const friends = ["Kamraan", "Ornob", "Shanto", "Faysal", "Shimanto"];
const [...restFriends] = friends;
//console.log(friends[0]);

//console.log(newFriend,oldFriend)
console.log(...restFriends);