import React from "react";
import './footer.css';

export const Footer = () => {
    return <>
    
        <footer>
            <div className="container">
                <div className="box">
                    <ul className="flex">
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                        <li>lorem ipsum</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="box">
                    <h3>Follow Us</h3>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-github"></i>
                </div>
                <div className="box">
                    <h3>Lorep ipsum</h3>
                    <div className="img flexSB">
                        <img src="../images/app-store.png" alt="" />
                        <span>App store</span>
                        <img src="../images/google-play.png" alt="" />
                        <span>Google play</span>
                    </div>
                </div>
            </div>
        </footer>
    
    </>
}