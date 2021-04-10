 import React,{useState} from 'react'
 import FunctionContext from './FunctionContext'

 export const ThemeContext = React.createContext()

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}> Toggle Theme</button>
       <FunctionContext/>
    </ThemeContext.Provider>
  );
}

export default App;
