import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Work extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Work</h1>
        <Link to='/'>Link to Home</Link>
      </div>
    );
  }
}

export default Work;