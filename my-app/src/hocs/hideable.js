import { Component } from 'react';

export function hideable(InnerComponent) {
  class Hideable extends Component {
    render() {
      const {show, ...innerProps} = this.props;
      return (
        <div>
          <button>Toggle</button>
          {show && <InnerComponent {...innerProps} />}
        </div>
      );
    }
  }

  Hideable.displayName = `Hideable(${InnerComponent.name})`

  return Hideable;
}
