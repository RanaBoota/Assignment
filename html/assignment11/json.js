// let jsonobj={
//     name:"Awaiz",
//     channel:"CHW",
//     friend:"Ahson",
//     food:"Bindi"
// }
// console.log(jsonobj);
// let myjson=JSON.stringify(jsonobj);
// console.log(myjson);

// myjson=myjson.replace("Awaiz",'Talha');
// console.log(myjson);
// localStorage.getItem("testJSON",myjson);
// let text=localStorage.getItem("testJSON")

// newjson=JSON.parse(myjson);
// console.log(newjson)

// object
let student={
    firstname:"Muhammad",
    lastname:"Boota",
    age:20,
    height:6,
    fullname:function() {
        return this.firstname + "  " + this.lastname;
    }
};
student.age=19;
student.age++;
let studentfullname=student.fullname();
console.log("student's full name:" + studentfullname);
console.log("studen age:" + student.age);
