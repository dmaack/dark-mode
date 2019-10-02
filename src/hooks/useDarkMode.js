import { useLocalStorage } from './useLocalStorage';
import  {useEffect}  from 'react';

export const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage('dark', false);

    //set up effect hook 
    //check to see if value from useLocalStorage is true or false
    //if true - add dark-mode class
    //if false - add remove the class dark-mode
    useEffect(() => {
        const dark = document.querySelector('body');
            darkmode === true ? dark.classList.add('dark-mode') : dark.classList.remove('dark-mode')
        // if(darkmode === true) {
        //     dark.classList.add('dark-mode');
        // } else {
        //     dark.classList.remove('dark-mode');
        // }
    }, [darkmode]) //what the effect depends on and should be synced with

    return [darkmode, setDarkMode]
}