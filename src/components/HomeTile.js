import React, { Component } from 'react';

import './HomeTile.css';

class HomeTile extends Component {

  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.openTile = this.openTile.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleHover(){
    if (this.props.className === 'about' ||
        this.props.className === 'work' ||
        this.props.className === 'tech' ||
        this.props.className === 'contact') {
      this.setState({ isHovered: !this.state.isHovered})
    }
  }

  openTile(name) {
    this.props.openTile(name);
  }

  render() {
    const tileClasses = this.props.className + (this.state.isHovered ? " is-hovered" : "");
    return (
      <div className={ tileClasses }
           onMouseEnter={ this.handleHover }
           onMouseLeave={ this.handleHover }
           onClick={ this.openTile(this.props.title) }>
          <div className="tile-title">
            <div>{ this.props.title }</div>
            { this.props.subTitle ? <div>{ this.props.subTitle }</div> : '' }
          </div>
      </div>
    );
  }
}

export default HomeTile;