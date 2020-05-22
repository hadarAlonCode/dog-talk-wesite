import React, { useState, useEffect } from 'react';

// @ts-ignore
export const myContext = React.createContext();

const Provider = props => {
    const [language , Setlanguage] = useState("hebrew")

    useEffect(() => {

      const {haim_site_language} = localStorage
  
      if(haim_site_language !== undefined){
        Setlanguage(haim_site_language)
      }else{
        Setlanguage("hebrew")
      }
      
     }, [])

   const changeLnguage = () => {
     let new_lan =  language === "hebrew" ? "english" : "hebrew"
     localStorage.haim_site_language = new_lan

     Setlanguage(new_lan)
    
   }

  return (
    <myContext.Provider value={{
      language,
      changeLanguage: () => changeLnguage()
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
    <Provider>
      {element}
    </Provider>
  );