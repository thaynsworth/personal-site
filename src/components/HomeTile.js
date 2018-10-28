import React, { Component } from 'react';

import './HomeTile.css';

class HomeTile extends Component {

  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleHover(){
    this.setState({ isHovered: !this.state.isHovered})
  }

  render() {
    const tileClasses = this.props.className + (this.state.isHovered ? " is-hovered" : "");
    return (
      <div className={ tileClasses }
           onMouseEnter={ this.handleHover }
           onMouseLeave={ this.handleHover }>
          <div className="tile-title">
            <div>{ this.props.name }</div>
            <div>{ this.props.jobTitle }</div>
          </div>
      </div>
    );
  }
}

export default HomeTile;