import styles from './Select.module.scss';

import { Component } from 'react';

export default class Select extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleClickItem = (item) => {
    console.log('handleClickItem', item);
    const { onSelected = () => {} } = this.props;
    onSelected(item);
    this.setState({
      open: false,
    });
  };

  handleDocumentClick = () => {
    this.setState({
      open: false,
    });
  }

  componentDidMount() {
    // document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    // document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { items = [], selected = '' } = this.props;
    const { open } = this.state;

    const itemsJsx = items.map((it) => (
      <div className={styles.item} key={it} onClickCapture={() => this.handleClickItem(it)}>
        {it}
      </div>
    ));

    return (
      <div className={styles.Select}>
        <div className={styles.selected} onClick={this.toggleOpen}>{selected}</div>
        {open && <div className={styles.items}>{itemsJsx}</div>}
      </div>
    );
  }
}
