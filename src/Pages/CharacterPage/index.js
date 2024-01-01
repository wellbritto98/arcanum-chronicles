import CardPadrao from "../../components/CardPadrao";
import Layout from "../../components/Layout";
import MenuLateral from "../../components/MenuLateral";
import MenuLateralItems from "../../components/MenuLateralItems";
import NavbarPadrao from "../../components/NavbarPadrao";
import "./CharacterPage.css";
import { Modal, Button } from 'react-bootstrap';
import { toastError, toastSuccess } from '../../Services/ToastService.js';
import React, { useState } from 'react';
import CellPhone from "../../components/CellPhone/index.js";

function CharacterPage() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleSaveChanges = () => {
    toastSuccess('Pensamento alterado com sucesso!');
    let thinking = document.querySelector('.character-thinking');
    let thinkingInput = document.querySelector('#thinking-input-change');
    thinking.innerHTML = thinkingInput.value;
    setShowModal(false);
  }

  return (
    <>
    <CellPhone />
      <Layout>
        <NavbarPadrao />
        <div className="character-page">
          <div className="left-column">
            <CardPadrao
              title="Ademilson Jorge"
              content={
                <div className="character-card">
                  <div className="character-portrait">
                    <img
                      src="https://i.imgur.com/LHyD4Df.png"
                      alt="Character Portrait"
                    />
                  </div>
                  <div className="character-info">
                    <div className="character-personal-infos">
                      Adélio Jomilson tem 234 anos. Ele é um mago elemental,
                      atualmente encontra-se em {" "}
                      <a href="#" className="link-info-character">
                        Sollaria
                      </a>
                      , passando um tempo em {" "}
                      <a href="#" className="link-info-character">
                        Ministério De Magia de Sollaria.
                      </a>
                    </div>

                    <div className="character-focus">
                      Adélio gosta de <strong>passear</strong> durante suas
                      horas vagas e se esforça para{" "}
                      <strong>aprimorar habilidades </strong> visando ao sucesso
                      profissional.
                    </div>

                    <div className="character-thinking">
                      O que Adélio anda pensando...
                      <span id="editar-thinking" onClick={handleOpenModal}><i className="fas fa-pencil-alt"></i></span>
                    </div>
                  </div>
                </div>
              }
            />
            <CardPadrao
              title="Character Name"
              content={
                <>
                  <p>Character Description</p>
                  <p>Character Description</p>
                  <p>Character Description</p>
                  <p>Character Description</p>
                  <p>Character Description</p>
                </>
              }
            />
          </div>
          <div className="right-column">
            <MenuLateral>
              <MenuLateralItems id={"personagem"} title={"Personagem"}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </MenuLateralItems>
              <MenuLateralItems id={"magia-e-foco"} title={"Magia e Foco"}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </MenuLateralItems>
              <MenuLateralItems id={"posses"} title={"Posses"}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </MenuLateralItems>
              <MenuLateralItems id={"negociacoes"} title={"Negociações "}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </MenuLateralItems>
              <MenuLateralItems id={"etc"} title={"Etc "}>
                <li>
                  <a href="#">Item 1</a>
                </li>
                <li>
                  <a href="#">Item 2</a>
                </li>
                <li>
                  <a href="#">Item 3</a>
                </li>
              </MenuLateralItems>
            </MenuLateral>
          </div>
        </div>
        <Modal className="modal-thinking" show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Pensamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" id="thinking-input-change" className="form-control" placeholder="Pensamento" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Fechar
            </Button>
            <Button variant="warning" onClick={handleSaveChanges}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    </>
  );
}

export default CharacterPage;
