import { Component } from 'react';
import { hideable } from '../../hocs/hideable';
import Counter from '../CounterRenderProps/Counter';
import WithRef from '../Exemples/WithRef';
import Select from '../Select/Select';

const HideableSelect = hideable(Select);

export default class Home extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Eric'],
    selectedPrenom: 'Jean',
  };
  // componentDidMount() {
  //   throw new Error();
  // }
  render() {
    const { prenoms, selectedPrenom } = this.state;
    return (
      <div>
        <p>Vous avez sélectionné : {selectedPrenom}</p>
        <Select
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />

        <HideableSelect
          show={false}
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />

        <WithRef />

        <Counter component={({count}) => <button>{count}</button>} />
      </div>
    );
  }
}
