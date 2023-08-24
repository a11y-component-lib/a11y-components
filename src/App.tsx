import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@/styles/App.css'
import { ExampleCard } from './lib/ExampleCard'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>A11y Component Lib</h1>
        <p>Render Components Example Usage Here</p>
        <ExampleCard title="Example Component" img={ {"src": "", "alt": ""} }>This is a card</ExampleCard>
    </>
  )
}

export default App
