import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Link to='/'>Link to Home</Link>
      </div>
    );
  }
}

export default Contact;