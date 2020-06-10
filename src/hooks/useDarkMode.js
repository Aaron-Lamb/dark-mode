import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (colorMode) => {
    const[value, setValue] = useLocalStorage('colorMode', colorMode);

        useEffect(() => {
        // const bodyTag = document.querySelector('body');

        // // if(value = true) {
        // //     return bodyTag.classList.add('dark-mode')
        // }

        // return bodyTag.classList.remove('dark-mode')

            return value

            ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');

    }, [value])

    return [value, setValue];
}