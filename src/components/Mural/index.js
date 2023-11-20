import './mural.css'
import React from 'react';
import { Navbar, Nav, Container, Btn } from 'react-bootstrap';

const Mural = () => {

    return (
        <div className='content-container w-100 flex-column d-flex justify-content-center align-items-center'>
            <div className='real-container'>
                <Navbar className='p-0' expand="lg">
                    <Container className='p-0'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning m-3 p-1' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto w-100">
                                <Nav.Link className='item-navegacao w-100 d-flex align-items-center justify-content-center ' href="#sobre-o-jogo">Sobre o jogo</Nav.Link>
                                <Nav.Link className='item-navegacao w-100 d-flex align-items-center justify-content-center' href="#atualizacoes">Atualizações</Nav.Link>
                                <Nav.Link className='item-navegacao w-100 d-flex align-items-center justify-content-center' href="#qualquer-coisa1">Qualquer coisa</Nav.Link>
                                <Nav.Link className='item-navegacao w-100 d-flex align-items-center justify-content-center' href="#qualquer-coisa2">Qualquer coisa</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='custom-text-container d-flex flex-column flex-sm-row  p-4'>
                    <div className='column md-row'>
                        <p className='text-white text-justify custom-text'>
                            Em "Arcanum Chronicles", os jogadores iniciam suas jornadas como estudantes em uma prestigiada academia de magia escondida do mundo moderno, explorando o vasto conhecimento arcânico e dominando as artes sobrenaturais. À medida que progredirem, terão a chance de especializar-se em diferentes caminhos mágicos, participar de duelos épicos e engajar-se em intrigas políticas dentro e fora da escola.

                        </p>
                        <p className='text-white text-justify custom-text'>
                            Além das aventuras mágicas, "Arcanum Chronicles" oferece uma experiência de vida virtual rica, permitindo que os jogadores formem relações profundas, desde amizades até romances e linhagens familiares. Os jogadores podem casar, estabelecer residências e até mesmo influenciar as futuras gerações de magos através de suas proles.
                        </p>
                        <button className='btn btn-warning ps-5 pe-5 pt-3 pb-3' data-bs-toggle="modal" data-bs-target="#modalRegisterForm">Registre-se agora!</button>
                    </div>

                    <div className='ps-0 pt-3 ps-sm-5 '>
                        <img src='https://i.imgur.com/9GG6spL.png' />
                    </div>



                </div>
            </div>


        </div>
    )
}


export default Mural;