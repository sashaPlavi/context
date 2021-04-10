import React, {useContext} from 'react'
import {ThemeContext} from './App'


export default function FunctionContext() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        background: darkTheme? '#333' : '#ccc',
        color: darkTheme? '#ccc': '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return (
        <div style={themeStyles}>
            Function theme
        </div>
    )
}
