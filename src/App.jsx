import './App.css'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar/>
      <HomePage/>
    </div>
  )
}

export default App
