import * as React from 'react';

export class EnvStatus extends React.Component {
  
  state: {
    mode: string,
    dbServer: string,
    dbName: string
  };

  constructor() {
    super({});

    this.state = {
      mode: process.env.MODE,
      dbServer: process.env.DBSERVER,
      dbName: process.env.DBNAME,
    };
  }

  componentDidMount() {
    this.setState({ mode: (this.state.mode) });
    this.setState({ dbServer: (this.state.dbServer) });
    this.setState({ dbName: (this.state.dbName) });
  }

  render() {
    return (
      <div>
        <p>Mode: {this.state.mode}</p>
        <p>Database Server: {this.state.dbServer}</p>
        <p>Database Name: {this.state.dbName}</p>
      </div>
    );
  }
}