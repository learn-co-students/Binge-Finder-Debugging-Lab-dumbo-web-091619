import React, { Component } from 'react'

class TVShow extends Component {
  handleClick = (event) => this.props.selectShow(this.props.show)

  render () {
    return (
      <div>
        <br />
        <img src={this.props.show.image.medium} onClick={this.handleClick} />
      </div>
    )
  }
}

export default TVShow
