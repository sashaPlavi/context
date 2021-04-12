 import React from 'react'
 import FunctionContext from './FunctionContext'
 import {ThemeProvider} from './ThemeContext'

 export const ThemeContext = React.createContext()

function App() {
 
  return (
    <ThemeProvider>
       <FunctionContext/>
    </ThemeProvider>
  );
}
      

export default App;
