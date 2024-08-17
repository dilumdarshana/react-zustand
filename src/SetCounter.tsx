import { useEffect } from 'react';
import { useStore } from './store';

// sate can use outside of the component this way
const countOutSide = () => {
  const count = useStore.getState().count;
  console.log('count', count);
};

// set outside of the component
const setCountOutSide = () => {
  useStore.setState({ count: 100 });
};

const SetCounter = () => {
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  useEffect(() => {
    countOutSide();
  }, []);

  return (
    <div className="component">
      <h2>Set Counter</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setCountOutSide}>Set from Outside</button>
    </div>
  )
}

export default SetCounter;
