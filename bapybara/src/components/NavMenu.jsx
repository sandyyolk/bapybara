import React, { useState } from 'react';

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                className={`hamburger-btn ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <nav className="menu-links">
                    <a href="#details" onClick={closeMenu}>Event Info</a>
                    <a href="#menu" onClick={closeMenu}>Menu</a>
                    <a href="#about" onClick={closeMenu}>About Us</a>
                </nav>
            </div>

            <style>{`
                .hamburger-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    z-index: 200;
                    position: relative;
                    padding: 10px;
                }

                .line {
                    width: 30px;
                    height: 2px;
                    background-color: #ffffff;
                    transition: all 0.3s ease;
                }

                /* Hamburger Animation */
                .hamburger-btn.open .line:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 6px);
                }

                .hamburger-btn.open .line:nth-child(2) {
                    transform: rotate(-45deg) translate(5px, -6px);
                }

                /* Menu Overlay */
                .menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.95);
                    backdrop-filter: blur(10px);
                    z-index: 150;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.4s ease;
                }

                .menu-overlay.open {
                    opacity: 1;
                    pointer-events: all;
                }

                .menu-links {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    text-align: center;
                }

                .menu-links a {
                    color: #ffffff;
                    text-decoration: none;
                    font-family: var(--font-heading, sans-serif);
                    font-size: 2.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .menu-links a:hover {
                    color: #ccc;
                    transform: scale(1.05);
                }
            `}</style>
        </>
    );
}
