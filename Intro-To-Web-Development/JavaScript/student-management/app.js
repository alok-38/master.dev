const STUDENT = {
  firstName: "Sarah",
  lastName: "Wilson",
  studentId: "STU001",
  age: 20,
  major: "Psychology",
  gpa: 3.7,
  credits: 45,
  hobbies: ["reading", "swimming", "photography"],
  isActive: true,
  //   Methods
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  // Produce the following output
  // Hi! I'm Sarah Wilson, a Psychology major with a 3.7 GPA.
  studentIntro: function () {
    return `
      Hi! I'm ${this.firstName} ${this.lastName} and my ID is ${this.studentId}
      and I'm ${this.age}.
    `;
  },
};

console.log(STUDENT.studentIntro());