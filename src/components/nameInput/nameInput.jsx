import { useState, useEffect } from "react";

export const NameInput = () => {
    const [name, setName] = useState(''); // useState som berättar att 'name' är en empty string
    const [submittedName, setSubmittedName] = useState('[ insert your name ]'); // useState som berättar att 'name' är en string

    useEffect(() => {
        const storedName = localStorage.getItem('name'); 
        if (storedName) {
            setSubmittedName(storedName);
        }
    }, []) // Kollar om det finns ett 'storedName' när sidan laddas. Om så är det sparat i localStorage och visas 

    const handleSubmit = (e) => { // Funktionen för att kunna fylla i sitt namn. 
        e.preventDefault(); // Default ska det inte finnas något inlagt
        setSubmittedName(name); // Funktionen för att skriva in ditt namn
        console.log("Sparat namn:", name);
        localStorage.setItem('name', name) // Sparar namnet till local storage
    }; 


    return (
        <div className="name-container">
            <form 
                className="new-item-form" 
                onSubmit={(e) => handleSubmit(e)}> 
                <h2>Choose your space name</h2>
                <label htmlFor="spaceName">Space Name ( must be 3 characters )</label>
                <div className="input-boxes">
                    <input 
                        className="text-box"
                        type="text" 
                        id="spaceName"
                        placeholder="Enter your space name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        className="submit-box"
                        type="submit" 
                        value="Show my name"
                        disabled={name.length < 3} // Om namnet har färre än tre tecken går det inte att submitta
                    />
                </div>
            </form>
            <h2>Welcome <span>{submittedName}</span>!</h2>
        </div>
    );
};
