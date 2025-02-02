import { useEffect, useState } from "react";

const GitButton = () => {
    const [buttonText, setButtonText] = useState("GIT REPOSITORY");

    useEffect(() => {
        const updateText = () => {
            setButtonText(window.innerWidth <= 768 ? "Git" : "GIT REPOSITORY");
        };

        updateText(); // Set initial value
        window.addEventListener("resize", updateText);

        return () => window.removeEventListener("resize", updateText);
    }, []);

    return (
        <a href="https://github.com/abkr020/todo-with-localstorage" target="_blank" rel="noopener noreferrer">
            <button className="navbar__button">{buttonText}</button>
        </a>
    );
};

export default GitButton;
