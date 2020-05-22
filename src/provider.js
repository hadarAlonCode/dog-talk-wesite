import React, { useState, useEffect } from 'react';

// @ts-ignore
export const myContext = React.createContext();

const Provider = props => {
    const [language , Setlanguage] = useState("hebrew")


    // === set site language and diraction css
    useEffect(() => {
      const {haim_site_language} = localStorage
      if(haim_site_language !== undefined){
        Setlanguage(haim_site_language)
        setDiractionCss(haim_site_language)
      }else{
        Setlanguage("hebrew")
        setDiractionCss("hebrew")
      }

     }, [])


   // === change site language and diraction css

   const changeLnguage = () => {
     let new_lan =  language === "hebrew" ? "english" : "hebrew"
     localStorage.haim_site_language = new_lan
     Setlanguage(new_lan)
     setDiractionCss(new_lan)
   }


   // === set language diraction css func

   const setDiractionCss =(language)=>{

    let body = document.body;

     if(language === "hebrew" ){
      body.classList.add("hebrew__lan");
      body.classList.remove("english__lan");
     }else{
      body.classList.add("english__lan");
      body.classList.remove("hebrew__lan");
     }

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