import React from 'react'
import './styles/Navbar.css'


const Navbar: React.FC = () => {
    const handleClearLocalStorage = () => {
        localStorage.clear();
        alert("LocalStorage has been cleared!");
    }

    const handleToggleTheme = () => {
        document.body.classList.toggle('dark-mode');
    }
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
