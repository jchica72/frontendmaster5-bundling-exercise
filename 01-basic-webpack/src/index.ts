const logoImg = require('./content/logo_2.png');
import { summaryClass } from './sideService';

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);

const listSummary = document.createElement('ul');
listSummary.classList.add('student-list');

summaryClass.forEach((student) => {
  let newStudent = document.createElement('li');
  let studentRow = `${student.name} ( Avg: ${student.averageCalification}, High: ${student.highestCalification})`;
  newStudent.append(studentRow);
  listSummary.appendChild(newStudent);
});

document.getElementById('list-summary').appendChild(listSummary);
