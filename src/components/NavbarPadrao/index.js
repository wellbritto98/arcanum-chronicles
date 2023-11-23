import Clock from '../Clock';
import './NavbarPadrao.css'


const NavbarPadrao = () => {
    return (
        <header className="header-padrao bg-dark text-white">
            <nav className="navbar navbar-expand-lg navbar-dark container ps-5 pe-5">
                <ul className="navbar-nav mr-auto container justify-content-between">
                    <li className="nav-brand active">
                        <img src="https://i.imgur.com/vqwZmE7.png" alt="Logo" />
                    </li>
                    <li className="nav-item active">
                        <Clock />
                    </li>
                    <li>
                        <button className="btn btn-outline-light" type="button">Sair</button>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark container justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Sobre</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavbarPadrao;