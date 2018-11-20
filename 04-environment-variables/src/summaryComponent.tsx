import * as React from 'react';
import { summaryClassRoom } from './summarizeClassRoom';

interface StudentSummary {
  name: string;
  highestCalification: number;
  averageCalification: string;
}

export class SummaryComponent extends React.Component {

  state: {
    students: Array<StudentSummary>
  };

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