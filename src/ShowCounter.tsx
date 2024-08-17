import { useStore } from './store'; 

const ShowCounter = () => {
  const count = useStore(state => state.count);

  return (
    <div className="component">
      <h2>Show Counter</h2>
      <p>Counter: {count}</p>
    </div>
  )
}

export default ShowCounter;
