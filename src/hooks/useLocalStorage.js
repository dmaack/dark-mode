import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {  
        const localData = localStorage.getItem(key);
            console.log('This is my localData variable' , localData)  
            
            // if(localStorage.getItem(key) ) {
            //     return JSON.parse(localStorage.getItem(key))
            // }else {
            //     return initialValue
            // }


            if(localData) {
                return JSON.parse(localData)
            } else{
                return initialValue
            }
        // return localData ? JSON.parse(localData) : initialValue;
    })

        console.log(storedValue)

        const setValue = value => {
                //update storedValue state property
            setStoredValue(value);
                //update localStorage value
            localStorage.setItem(key, JSON.stringify(value))
        }

        return [storedValue, setValue]

    }