import { Component } from 'react';
import { PrenomContext } from '../../contexts/PrenomContext';
import { hideable } from '../../hocs/hideable';
import CounterHooks from '../CounterHooks/CounterHooks';
import Counter from '../CounterRenderProps/Counter';
import WithRef from '../Exemples/WithRef';
import Select from '../Select/Select';

const HideableSelect = hideable(Select);

export default class Home extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Eric'],
    // prenom: 'Jean',
  };
  // componentDidMount() {
  //   throw new Error();
  // }
  render() {
    const { prenoms } = this.state;
    const { prenom, setPrenom } = this.context;
    return (
      <div>
        <p>Vous avez sélectionné : {prenom}</p>
        <Select
          items={prenoms}
          selected={prenom}
          onSelected={(item) => setPrenom(item)}
          renderItem={(item) => (
            <>
              <input type="checkbox" /> {item}
            </>
          )}
        />

        <HideableSelect
          show={false}
          items={prenoms}
          selected={prenom}
          onSelected={(item) => setPrenom(item)}
        />

        <WithRef />

        <Counter component={({ count }) => <button>{count}</button>} />

        <CounterHooks />
      </div>
    );
  }
}

Home.contextType = PrenomContext;
