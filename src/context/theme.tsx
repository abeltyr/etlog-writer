'use client'

import React, { useContext, useState } from "react";

const initialValues: {
    theme: string,
    setTheme: Function,
    reset: Function,
} = {
    theme: "",
    setTheme: () => { },
    reset: () => { },
};

type Props = {
    children?: React.ReactNode;
};

const ThemeContext = React.createContext(initialValues);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<Props> = ({ children }) => {

    const defaultThem = "dark"
    const [theme, setTheme] = useState<string>(defaultThem);

    const reset = () => {
        setTheme(defaultThem);
    }


    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                reset
            }}
        >
            <div data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, useTheme };