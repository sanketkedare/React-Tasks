// TheamContextComponent manages the application's theme (Dark/Light) and persists the user's choice using localStorage.

import React, { createContext, useEffect, useState } from 'react';

export const TheamContext = createContext();

const TheamContextComponent = ({ children }) => {
    const THEME_CHOICES = [
        { name: "Dark", background: "#010113", text: "#faebd7" },
        { name: "Light", background: "#F5F5DC", text: "#010113" },
    ];

    const [theme, setTheme] = useState(THEME_CHOICES[0]);

    // Toggles between themes and updates localStorage
    const changeTheme = () => {
        const newTheme = theme.name === "Dark" ? THEME_CHOICES[1] : THEME_CHOICES[0];
        setTheme(newTheme);
        localStorage.setItem("currentTheme", JSON.stringify(newTheme));
    };

    // Initializes theme from localStorage or sets default
    const themeLocalStorage = () => {
        const storedTheme = localStorage.getItem("currentTheme");
        if (storedTheme) {
            setTheme(JSON.parse(storedTheme));
        } else {
            setTheme(THEME_CHOICES[0]);
            localStorage.setItem("currentTheme", JSON.stringify(THEME_CHOICES[0]));
        }
    };

    // Fetches theme on initial load
    useEffect(() => {
        themeLocalStorage();
    }, []);

    return (
        <TheamContext.Provider value={{ theme, changeTheme }}>
            {children}
        </TheamContext.Provider>
    );
};

export default TheamContextComponent;
