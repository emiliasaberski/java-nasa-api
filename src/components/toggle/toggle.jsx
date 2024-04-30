/* eslint-disable react/prop-types */
import { useState } from "react";
import useLocalStorage from "use-local-storage";


export const Toggle = () => {
    const [storedTheme, setTheme] = useLocalStorage("light");
    const [isChecked, setIsChecked] = useState(storedTheme === "dark");

    
    const toggleTheme = () => {
        const newTheme = storedTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setIsChecked(newTheme === "dark");
    };

    //Funktion som ändrar vilken text som syns beroende på om det är light mode eller dark mode
    const toggleText = () => {
        if (storedTheme === "light" ) {
            return (
            <p>Dark mode</p>
            )
        }
        else {
            return (
            <p>Light mode</p>
            )
        }
    }

    return (
        <div className="toggle-container">
            {toggleText()}
            <label htmlFor="toggle" className="toggle">
                <input
                    type="checkbox"
                    id="toggle"
                    onChange={toggleTheme} 
                    checked={isChecked}
                />
                <span className={`slider round ${isChecked ? 'checked' : ''}`}></span>
            </label>
        </div>
    );
};