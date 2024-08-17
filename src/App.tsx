import SetCounter from './SetCounter'
import ShowCounter from './ShowCounter'

function App() {
  return (
    <div className="main-wrapper">
      <h1>Zustand with state management</h1>
      <div className="com-wrapper">
        <SetCounter />
        <ShowCounter />
      </div>
    </div>
  )
}

export default App
