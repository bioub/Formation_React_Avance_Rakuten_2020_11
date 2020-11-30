# Exercice React

## Compléter cet exemple

```
import React, { Component } from 'react';

class ExMultiStateButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { } = this.state;
    return (
      <button
        className="ExMultiStateButton"

      >
        {/* par défaut afficher la première valeur reçue des props
            à chaque clic afficher la suivante
            s'il n'y a plus de valeur afficher la première */}
      </button>
    );
  }
}

export default ExMultiStateButton;
```

A utiliser sur Home comme ceci :

```
<ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
```

