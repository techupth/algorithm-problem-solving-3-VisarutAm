function sortStudentsByScore(students) {
  let num = students.length;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - 1 - i; j++) {
      if (students[j].score < students[j + 1].score) {        
        let student = students[j];
        students[j] = students[j + 1];
        students[j + 1] = student;
      }
    }
  }
  return students;
}

let students=[
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 }
];

console.log(sortStudentsByScore(students))