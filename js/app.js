// function -> method
let name = "Ireedui sara ";
console.log(name.length);
console.log(name.charAt(0));
console.log(name[0]);
console.log(name.substring(1, 4));
console.log('name.split("")', name.split(""));
// string convert array (up row)
console.log(name.repeat(3));
console.log(name.toUpperCase());
console.log(name.toLowerCase());

name[0] = name.charAt(0).toUpperCase();
console.log(name);

// problem

let animals = [
  {
    leg: 4,
    name: "dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 10,
  },
  {
    leg: 4,
    name: "cat",
    height: 123,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 145,
  },
];
// [
//   { name: 'dog', height: 10 },
//   { name: 'cat', height: 10 }
// ]
const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.
let student = [
  { name: "Bat", age: 23, grade: 90, balance: 800 },
  { name: "Bold", age: 28, grade: 80, balance: 800 },
  { name: "Bagi", age: 29, grade: 50, balance: 800 },
];
const findMinGrade = (arr) => {
  let minGrade = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (minGrade.grade > arr[i].grade) {
      minGrade = arr[i];
    }
  }
  return minGrade;
};
console.log(findMinGrade(student));

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив болгон ялгаж буцаадаг функц бич.
let students = [
  { name: "Haliun", age: 23, grade: 79 },
  { name: "Kate", age: 13, grade: 79 },
  { name: "Haagii", age: 43, grade: 79 },
  { name: "Sarah", age: 12, grade: 79 },
];

const findUnderEighteen = (arr) => {
  let underEighteen = [];
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      underEighteen[count] = arr[i];
      count++;
    }
  }
  return underEighteen;
};
console.log(findUnderEighteen(students));

// // Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.
let learner = [
  { name: "Andy", age: 23, grade: 90 },
  { name: "Ara", age: 33, grade: 10 },
  { name: "Anhaa", age: 245, grade: 30 },
];
const allGrade = (arr) => {
  let total = 0;

  for (i = 0; i < arr.length; i++) {
    total += arr[i].grade;
  }
  return total;
};
console.log(allGrade(learner));

// // Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

let learners = [
  { name: "Aminaa", age: 45, grade: 80 },
  { name: "Huslen", age: 25, grade: 40 },
  { name: "Hatnaa", age: 24, grade: 30 },
  { name: "Hatnaa", age: 84, grade: 90 },
];
const findLearnersNames = (arr) => {
  let names = [];

  for (i = 0; i < arr.length; i++) {
    if ((arr[i].name = names)) {
      names[total] = {
        name: arr[i].name,
      };
      total++;
    }
  }
  return names;
};
console.log(findLearnersNames(learners));

// // Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

let scholar = [
  { name: "Hatnaa", age: 24, grade: 30 },
  { name: "Hatnaa", age: 34, grade: 20 },
  { name: "Hatnaa", age: 44, grade: 50 },
  { name: "Hatnaa", age: 14, grade: 60 },
];
const descendingOrder = (arr) => {
  return arr.sort((a, b) => b.grade - a.grade);
};
console.log(descendingOrder(scholar));

//
// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.
let pupil = [
  { name: "Aminaa", age: 34, grade: 20, balance: 12000 },
  { name: "Anhiluun", age: 78, grade: 90, balance: 1000 },
  { name: "Alimaa", age: 23, grade: 80, balance: 8000 },
  { name: "Erka", age: 35, grade: 50, balance: 22000 },
];

const richStudents = (arr) => {
  let richStu = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].balance > 10000) {
      richStu[count] = {
        name: arr[i].name,
        balance: arr[i].balance,
      };
      count++;
    }
  }
  return richStu;
};
console.log(richStudents(pupil));

// // Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }
let undergraduate = [
  { name: "Erka", age: 15 },
  { name: "Erka", age: 25 },
  { name: "Bold", age: 35 },
  { name: "Bold", age: 45 },
  { name: "Bold", age: 55 },
  { name: "Naran", age: 65 },
  { name: "Saran", age: 75 },
];
const nameCount = (arr) => {
  let counting = [];

  for (i = 0; i < arr.length; i++) {
    let name = arr[i].name;
    if (counting[name]) {
      // tuhain ner ali hedin ibject dotr bval 1r +:
      counting[name]++;
    } else {
      counting[name] = 1;
    }
  }
  return counting;
};
console.log(nameCount(undergraduate));

// // Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
let trainee = [
  { name: "Saran", gender: "female" },
  { name: "Bold", gender: "male" },
  { name: "Stive", gender: "male" },
  { name: "John", gender: "male" },
  { name: "Huslen", gender: "female" },
  { name: "Jack", gender: "female" },
];
const avgGradeGender = (arr) => 
  
//   let total = 0;
//   let all = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i].grade;
//     all += arr[i].grade;

//   }
// };
