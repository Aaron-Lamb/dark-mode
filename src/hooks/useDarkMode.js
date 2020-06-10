import { useLocalStorage } from './useLocalStorage';
// import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';
// import { useEffect } from "react";

export const useDarkMode = colorMode => {
    // export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', colorMode);
    //   const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

        useEffect(() => {
            //   useEffect(() => {
            return darkMode
            //     return darkMode

            ? document.querySelector('body').classList.toggle('dark-mode') 
            //       ? document.querySelector("body").classList.add("dark-mode")
            : document.querySelector('body').classList.remove('dark-mode');
            //       : document.querySelector("body").classList.remove("dark-mode");

    }, [darkMode])
    //   }, [darkMode]);

    return [darkMode, setDarkMode];
    //   return [darkMode, setDarkMode];
};


// };