import React from 'react';

export default class DelayedButton extends React.Component {
  handleClick = (event) => {
    this.props.onDelayedClick([
      event.persist(),
      setTimeout() = this.props.delay
    ]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click the button.</button>
    );
  }
}
