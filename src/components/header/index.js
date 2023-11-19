import React from 'react';
import './header.css'; // Certifique-se de ter um arquivo CSS com este nome

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-links">
                    <img src="./images/image 2.png" alt="Logo" />
                    <a href="/apoiador">Torne-se um apoiador</a>
                </div>

                <div className='playersOn'>Jogadores online: 100</div>

                <div className="nav-actions">
                    <button className="btn btn-register">Registre-se</button>            
                </div>
            </nav>
        </header>
    );
}

export default Header;
