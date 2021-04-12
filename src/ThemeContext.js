import React,{useState, useContext} from 'react'

const ThemeContext = React.createContext()
const ThemeToggleContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}
export function useThemeUpdate() {
  return useContext(ThemeToggleContext)
}


export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme(){
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
            {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
        )

}