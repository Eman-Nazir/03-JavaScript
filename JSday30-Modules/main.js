import heading, {
  variableLogs,
  declaredFunction,
  expressedFunction,
  arrowFunction,
  showArrayData,
  showStudentsTable,
  averageScore
} from './basics.js';
console.log("===============================");
console.log(heading());
console.log("===============================\n");
variableLogs();
declaredFunction("Eman");
expressedFunction(11); 
arrowFunction(6);       
showArrayData();
showStudentsTable();
const studentsList = [
  { name: "Ali", score: 85 },
  { name: "Zara", score: 58 },
  { name: "Bilal", score: 90 },
  { name: "Hira", score: 100 }
];
averageScore(studentsList); 
