import { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    // dans un composant stateful on manipule les props via this.props
    return <div className="Clock">{this.state.now.toLocaleTimeString()}</div>;
  }
}
