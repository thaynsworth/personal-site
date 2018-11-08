import React, { Component } from 'react';

import '../components/HomeTile';
import './Home.css';
import HomeTile from "../components/HomeTile";

class Home extends Component {

  constructor() {
    super();

    this.openTile = this.openTile.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  openTile(name){
    console.log('PARENT - Name should be what i clicked');
    console.log(name);
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="grid-container">
          <HomeTile className="name"
                    title="TOM HAYNSWORTH"
                    subTitle="SOFTWARE DEVELOPER"
                    openTile={this.openTile}/>
          <HomeTile className="about"
                    title="ABOUT"
                    openTile={this.openTile}/>
          <HomeTile className="work"
                    title="WORK"
                    openTile={this.openTile}/>
          <HomeTile className="tech"
                    title="TECH"
                    openTile={this.openTile}/>
          <HomeTile className="contact"
                    title="CONTACT"
                    openTile={this.openTile}/>
          <HomeTile className="resume"
                    title="RES"
                    subTitle="UME"
                    openTile={this.openTile}/>
        </div>
      </div>
    );
  }
}

export default Home;