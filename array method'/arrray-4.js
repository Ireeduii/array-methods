// map method
// array-g ooroor n oorhclohgui
// map method shijne array uusgej ogno
// map 1 function avna, tuhain function 1 utga vana
//map method shine array uusgej ogno, shine array n huuchin array-tei length adil bn
// ymar array uusgehe map-n return shiidne

let ages = [21, 12, 32, 42];
ages.map((a) => {
  console.log(a);
});

let age = [12, 21, 20];
let sis = age.map((b) => {
  console.log(b);
  return 12 * b;
});
console.log(sis);

//nasand hursen suragcdig filterdej oloh function bicih
let data = [
  {
    name: "Baaii",
    age: 17,
    grade: 11,
    gender: "female",
    balance: 12,
  },

  {
    name: "Bat",
    age: 19,
    grade: 9,
    gender: "male",
    balance: 10,
  },

  {
    name: "Baldan",
    age: 16,
    grade: 10,
    gender: "male",
    balance: 22,
  },
];

// function findByStudents(data) {
//   let filtered = data.filter((student) => {
//     return student.age > 18;
//   });
//   return filtered;
// }
// console.log(findByStudents(data));

// gender ogonguut tuhain gendereer filterlej ogoh function bich
function findByGender(data) {
  let gender = "male";
  let filtered = data.filter((student) => {
    return student.gender == gender;
  });
  return filtered;
}
console.log(findByGender(data));

// eg: filterByGender(students,"female") => zovhon erchuudiig yalgaj ogno
function findByFemale(data) {
  let gender = "female";
  let filtered = data.filter((student) => {
    return student.gender == gender;
  });
  return filtered;
}
console.log(findByFemale(data));

// nasaar n sortloh function bich
function sortAge(data) {
  let agesSort = ages.sort((age2, age1) => {
    return age2 - age1;
  });
}
console.log(data);
data.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log(data);

// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich
function maxBalance(data) {
  let number = 11;
  let filtered = data.filter((student) => {
    return student.balance > 11;
  });
  return filtered;
}
console.log(maxBalance(data));

// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]
// function addClassCodeToStudents(student, "3A") {
//   const class3AStudents = (student.filter(student) => {
//     student.classCode === "3A")
//   }
// }

// removeGenders from student array function bich
// Нэг л products массив дээр ажиллана
