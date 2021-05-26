import './Clicker.css';
import { Component } from 'react';

class Clicker extends Component {
    state = {
      count: 0
    }

    add = () => {
      this.setState({
        count: this.state.count + 1,
      });
    }

    subtract = () => {
      this.setState({
        count: this.state.count - 1,
      });
    }

    reset = () => {
      this.setState({
        count: 0,
      });
    }

  render() {
    return (
      <div className="Clicker">
        <p className="Counter">{this.state.count}</p>
        <div className="Buttons">
          <button className="Button" onClick={this.add}>+</button>
          <button className="Button" onClick={this.reset}>&#128472;</button>
          <button className="Button" onClick={this.subtract}>-</button>
        </div>
      </div>
    );
  }
}

export default Clicker;
