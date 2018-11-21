import * as React from 'react';
import { summaryClassRoom } from './summarizeClassRoom';

export class SummaryComponent extends React.Component {

  constructor() {
    super({});

    this.state = {
      students: summaryClassRoom
    };
  }

  render() {
    let studentList = this.state.students.map(function (student) {
      return <li>{student.name} - AVG: {student.averageCalification} - MAX: {student.highestCalification}</li>;
    })

    return <ul>{studentList}</ul>
  }
}