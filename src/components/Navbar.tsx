import React, { useEffect, useState } from 'react'
import './styles/Navbar.css'
import log from '../debugging/debug';


const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<string>("");

    const handleClearLocalStorage = () => {
        localStorage.clear();
        alert("LocalStorage has been cleared!");
    }

    const handleToggleTheme = () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            setTheme("light")
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add('dark-mode');
            setTheme("dark")
            localStorage.setItem("theme", "dark");
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        log("the use", savedTheme)
        if (savedTheme == null) {
            log("the use if", savedTheme)
            localStorage.setItem("theme", "dark");
            document.body.classList.add('dark-mode');
            setTheme("dark")

        }
        if (savedTheme === "dark") {
            document.body.classList.add('dark-mode');
            setTheme("dark")

        } else {
            document.body.classList.remove('dark-mode');
            setTheme("light")

        }
    }, []);
    return (
        <div className="navbar">

            <div className="navbar__left">
                <div className="navbar__logo">
                    <h1>कार्य सूची</h1>
                </div>
            </div>

            <div className="navbar__right">
                <button onClick={handleClearLocalStorage} className="navbar__button">
                    {"Clear Local Storage".toUpperCase()}
                </button>
                <a href="https://github.com/abkr020/todo-with-localstorage" target="_blank" rel="noopener noreferrer">
                    <button className="navbar__button">
                        {"Git Repository".toUpperCase()}
                    </button>
                </a>
                <button onClick={handleToggleTheme} className="navbar__button">
                    {theme=="dark" ? "DARK":"LIGHT"}

                </button>
            </div>

        </div>
    )
}

export default Navbar
