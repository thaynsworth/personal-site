import React, { Component } from 'react';

import '../components/HomeTile';
import './Home.css';
import HomeTile from "../components/HomeTile";

class Home extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="grid-container">
        <HomeTile className="about" name="ABOUT"/>
        <HomeTile className="projects" name="PROJECTS"/>
        <HomeTile className="tech" name="TECH"/>
        <HomeTile className="contact" name="CONTACT"/>
        <HomeTile className="resume" name="RESUME"/>
      </div>
    );
  }
}

export default Home;