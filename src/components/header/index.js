import React from 'react';
import './header.css'; // Certifique-se de ter um arquivo CSS com este nome

function Header() {
    return (
        <header className="header-ac bg-dark text-white">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <a className="navbar-brand" href="/">
                    <img src="https://i.imgur.com/vqwZmE7.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/apoiador">Torne-se um apoiador</a>
                        </li>
                    </ul>
                    <span className="navbar-text mx-2">Jogadores online: 100</span>
                    <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalRegisterForm">Registre-se</button>

                </div>
            </nav>
        </header>

    );
}

export default Header;
