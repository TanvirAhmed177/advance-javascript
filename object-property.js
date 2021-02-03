const student = [
  {
    id: 21,
    name: "Sunny",
  },
  {
    id: 41,
    name: "Robin",
  },
  {
    id: 33,
    name: "Ruhul",
  },
  {
    id: 266,
    name: "Rahim",
  },
];
// const result = [];

// for (let i = 0; i < student.length; i++) {
//   const element = student[i];
//   result.push(element.name);
// }
// console.log(result);

// const names = student.map((s) => s.name);
// const id1 = student.map((s) => s.id);
const id2 = student.filter((s) => s.id > 40);
const id3 = student.find((s) => s.id > 40);

console.log(id3);
