import { createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    const toggleFunc = () => {
        setToggle((prev) => !prev);
    }

    return (
        <ThemeContext.Provider value={{toggle, toggleFunc}} >
            {children}
        </ThemeContext.Provider>
    )
}