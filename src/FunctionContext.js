import React from 'react'
import {useTheme, useThemeUpdate} from './ThemeContext'



export default function FunctionContext() {
    const darkTheme = useTheme()
    const toggleTheme= useThemeUpdate()
    const themeStyles = {
        background: darkTheme? '#333' : '#ccc',
        color: darkTheme? '#ccc': '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return (
        <>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <div style={themeStyles}>
            Function theme
        </div>
        </>
    )
}
