import { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }
  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider