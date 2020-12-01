const { useState, useEffect, useRef } = require("react");

function CounterHooks() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log('componentDidMount / componentDidUpdate');
  });

  useEffect(() => {
    console.log('componentDidMount 2');
    // pas de await ici
    // ex: axait axios.get()
  }, []);

  useEffect(() => {
    console.log('componentDidMount step / componentDidUpdate step');
    return () => {
      console.log('componentWillUpdate step');
    };
  }, [step]);

  useEffect(() => {
    console.log('componentDidMount 3'); // addEventListener, setInterval
    return () => {
      console.log('componentWillUnmount 3'); // removeEventListener, clearInterval
    };
  }, []);

  // let prenom = 'Romain';
  const prenom = useRef('Romain');

  return (
    <div className="CounterHooks">
      <button onClick={() => setCount(count + step)}>{count}</button>

      Increment <input value={step} onChange={(event) => setStep(+event.target.value)} />

      Prenom <input defaultValue={prenom.current} onChange={(event) => {
        prenom.current = event.target.value;

      }} />

      <button onClick={() => {
        console.log(prenom.current);
      }}>Submit</button>
    </div>
  )
}

export default CounterHooks;
