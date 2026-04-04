class Student {
  constructor(name, math, science, english, computer, social, acc) {
    this.name = name;
    this.math = Number(math);
    this.science = Number(science);
    this.english = Number(english);
    this.computer = Number(computer);
    this.social = Number(social);
    this.acc = Number(acc);
    this.total = this.calculateTotal();
    this.percentage = this.calculatePercentage();
    this.grade = this.calculateGrade();
  }

  calculateTotal() {
    return this.math + this.science + this.english;
  }

  calculatePercentage() {
    return (this.total / 300) * 100; // 3 subjects, each 100 marks
  }

  calculateGrade() {
    if (this.percentage >= 80) return "A";
    if (this.percentage >= 60) return "B";
    if (this.percentage >= 40) return "C";
    return "F";
  }

  hasPassed() {
    return (
      this.math >= 40 &&
      this.science >= 40 &&
      this.english >= 40 &&
      this.computer >= 40 &&
      this.social >= 40 &&
      this.acc >= 40
    );
  }
}
function getData(event) {
  event.preventDefault();
  var name = document.forms["studentForm"]["fname"].value;
  var maths = document.forms["studentForm"]["fmaths"].value;
  var english = document.forms["studentForm"]["fenglish"].value;
  var science = document.forms["studentForm"]["fscience"].value;
  var computer = document.forms["studentForm"]["fcomp"].value;
  var social = document.forms["studentForm"]["fsocial"].value;
  var acc = document.forms["studentForm"]["facc"].value;
  student = new Student(name, maths, science, english, computer, social, acc);
  addStudentToTable(student);
}
function addStudentToTable(student) {
  const tableBody = document.querySelector("#resultTable tbody");
  const row = document.createElement("tr");
  row.className = student.hasPassed() ? "pass" : "fail";

  row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.math}</td>
        <td>${student.science}</td>
        <td>${student.english}</td>
        <td>${student.computer}</td>
        <td>${student.social}</td>
        <td>${student.acc}</td>
        <td>${student.total}</td>
        <td>${student.percentage.toFixed(2)}%</td>
        <td>${student.grade}</td>
    `;

  tableBody.appendChild(row);
}
