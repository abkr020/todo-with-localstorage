import React, { useEffect } from 'react'
import './styles/Navbar.css'
import log from '../debugging/debug';


const Navbar: React.FC = () => {
    const handleClearLocalStorage = () => {
        localStorage.clear();
        alert("LocalStorage has been cleared!");
    }

    const handleToggleTheme = () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem("theme", "dark");
        }
    }
    const sTheme = localStorage.getItem("theme");
    log("the",sTheme)
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        log("the use",sTheme)
        if(sTheme==null){
            log("the use if" ,sTheme)
            localStorage.setItem("theme", "dark");

            document.body.classList.add('dark-mode');
        }
        if (savedTheme === "dark") {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, []);
    
    return (
        <div className="navbar">

        <div className="navbar__left">
            <div className="navbar__logo">
                <h1>Logo</h1>
            </div>
        </div>

        <div className="navbar__right">
            <button onClick={handleClearLocalStorage} className="navbar__button">
                Clear LocalStorage
            </button>
            <button className="navbar__button">
                View Git Repository
            </button>
            <button onClick={handleToggleTheme} className="navbar__button">
                Toggle Dark/Light Mode
            </button>
        </div>

    </div>
    )
}

export default Navbar
