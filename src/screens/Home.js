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
      <div className="page-wrapper">
        <div className="grid-container">
          <HomeTile className="name" name="TOM HAYNSWORTH" jobTitle="SOFTWARE DEVELOPER"/>
          <HomeTile className="about" name="ABOUT"/>
          <HomeTile className="work" name="WORK"/>
          <HomeTile className="tech" name="TECH"/>
          <HomeTile className="contact" name="CONTACT"/>
          <HomeTile className="resume" name="RESUME"/>
        </div>
      </div>
    );
  }
}

export default Home;