import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tech extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Tech</h1>
        <Link to='/'>Link to Home</Link>
      </div>
    );
  }
}

export default Tech;