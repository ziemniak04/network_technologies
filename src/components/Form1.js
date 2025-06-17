import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Form1 = () => {
    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    localStorage.setItem("name", JSON.stringify(name));



    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                aria-label="fullname"
            />
            <input type="submit" value="Submit"></input>
        </form>
    );
};

export default Form1;