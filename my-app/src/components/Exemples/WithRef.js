import { Component, createRef } from 'react';

export default class WithRef extends Component {

  prop = 'test';

  inputRef = createRef();

  componentDidMount() {
    /** @type {HTMLInputElement} */
    const inputEl = this.inputRef.current;

    inputEl.focus();
  }

  render() {
    return (
      <div className="WithRef">
        <input type="search" ref={this.inputRef}  />
      </div>
    );
  }
}
