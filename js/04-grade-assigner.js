let grade = prompt("Enter number between 1 and 100")
if (grade < 1 || grade > 100) {
    alert("Numbers between 1 and 100 are allowed")
    grade = prompt("Enter number between 1 and 100")
}
if (grade < 60) {
    console.log("You received a F")
} else if (grade < 69 && grade > 60) {
    console.log("You received a D")
} else if (grade < 79 && grade > 70) {
    console.log("You received a C")
} else if (grade < 89 && grade > 80) {
    console.log("You received a B")
} else if (grade < 100 && grade > 90) {
    console.log("You received a A")
}