// 1.  A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [name, skills, scores] = student;
// const htmlScore = scores[0]
// const cssScore = scores[1]
// const jsScore = scores[2]
// const reactScore = scores[3]
// console.log(name, skills, scores);
// console.log(`jsScore: ${jsScore}, reactScore: ${reactScore}, cssScore: ${cssScore}, htmlScore: ${htmlScore}`);

// Write a function called convertArrayToObject which can convert the array to a structured object.

const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const newObject = (students) => {
    let result = [];
    students.forEach(value => {
        result.push(Object.assign({ name: value[0], skills: value[1], scores: value[2] }))
    })
    return result;
}
console.log(newObject(students));

console.log(`keys len: ${Object.keys(students).length}`);

console.log(`val len : ${Object.values(students).length}`);

// console.log(`skills : ${Object.keys(students.skills).length}`);

console.log(`keys :${Object.keys(students)}`)