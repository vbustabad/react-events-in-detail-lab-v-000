import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    const target = event.target

    this.state = {
      onReceiveCoordinates: [ x: 0, y: 0 ],
    };
  }

  handleClick = (event) => {
    this.setState([
      x: event.clientX,
      y: event.clientY
    ]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click this button.</button>
    );
  }
}
