import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [theme, setTheme] = useState('AppDark')

  function handleTheme(){
    {theme === "AppDark" ? setTheme("AppLight") : setTheme("AppDark")}
  }

  return (
    <div className={`${theme}`}>
      <NavBar handleTheme={handleTheme}/>
    </div>
  )
}

export default App
