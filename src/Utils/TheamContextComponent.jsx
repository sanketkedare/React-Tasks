import React, { createContext, useState } from 'react'

export const TheamContext = createContext();

const TheamContextComponent = ({children}) => 
{
    const THEME_CHOICES = [
        { name: "Dark", background: "#010113", text: "#faebd7" },
        { name: "Light", background: "#F5F5DC", text: "#010113"},
      ];
      
      const [theme, setTheme] = useState(THEME_CHOICES[0]);

      const changeTheme = () => {
        setTheme(theme.name === "Dark" ? THEME_CHOICES[1] : THEME_CHOICES[0]);
      };

  return (
    <TheamContext.Provider value={{theme, changeTheme}}>
        {children}
    </TheamContext.Provider>
  )
}

export default TheamContextComponent
