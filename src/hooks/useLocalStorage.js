import { useState } from 'react';
// import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // export const useLocalStorage = (key, initialValue) => {
        const [storedValue, setStoredValue] = useState(() => {
            //   const [storedValue, setStoredValue] = useState(() => {
                const item = window.localStorage.getItem(key);
                //     const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
        //     return item ? JSON.parse(item) : initialValue;
    });
    //   });
    const setValue = value => {
        //   const setValue = value => {
        setStoredValue(value);
        //     setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
        //     window.localStorage.setItem(key, JSON.stringify(value));
    };
    //   };

    return [storedValue, setValue];
    //   return [storedValue, setValue];
};
// };

