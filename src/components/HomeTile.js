import React, { Component } from 'react';

import './HomeTile.css';

class HomeTile extends Component {

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={ this.props.className }>
        <div className="tile-title">{ this.props.name }</div>
      </div>
    );
  }
}

export default HomeTile;