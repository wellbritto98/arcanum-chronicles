import CardPadrao from "../../components/CardPadrao";
import Layout from "../../components/Layout";
import MenuLateral from "../../components/MenuLateral";
import MenuLateralItems from "../../components/MenuLateralItems";
import NavbarPadrao from "../../components/NavbarPadrao";
import "./CharacterPage.css";
import { Modal, Button } from 'react-bootstrap';
import { toastError, toastSuccess } from '../../Services/ToastService.js';
import React, { useState, useEffect } from 'react';
import CellPhone from "../../components/CellPhone/index.js";
import { authService } from '../../Services/AuthService.js';
import axios from 'axios';
import API_URL from '../../Services/ApiUrlService';
import { jwtDecode } from 'jwt-decode'

function CharacterPage() {
  const [showModal, setShowModal] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);
  const [isOwner, setIsOwner] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };


  const handleCharOwner = async () => {
    try {
      const token = jwtDecode(localStorage.getItem('jwt'));
      let charId = token.ActiveCharacter;
      const response = await authService.verifyCharOwnership(charId);
      if (response === true) {
        setIsOwner(true);
      }
    } catch (error) {
      console.error('Erro ao verificar a propriedade do personagem', error);
    }
  }
  const GetCharInfo = async () => {
    try {

      const token = localStorage.getItem('jwt'); // Obtendo o token JWT do localStorage
      if (!token) {
        throw new Error('Não autenticado');
      }

      const tokenDecoded = jwtDecode(token);

      let charId = tokenDecoded.ActiveCharacter;

      const url = `${API_URL()}Character/GetCharacter?id=${charId}`;

      const response = await axios.get(url, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      });

      let charInfo = response.data.data;

      
      setCharacterInfo(mapCharInfo(charInfo));
    } catch (error) {
      console.error('Erro ao verificar a propriedade do personagem', error);
      throw new Error(error.response?.data || 'Erro ao verificar a propriedade do personagem');
    }
  }



    const mapCharInfo = (charInfo) => {
      let charInfoMapped = {
        name: charInfo.name,
        surname: charInfo.surname,
        gender: charInfo.gender,
        characterAvatarUrl: charInfo.characterAvatarUrl,
        age: charInfo.age,
        health: charInfo.health,
        energy: charInfo.energy,
        thinkings: charInfo.thinkings,  
        currentLocationId: charInfo.currentLocationId,
        currentLocationName: charInfo.currentLocationName,
        currentLocationPoloName: charInfo.currentLocationPoloName,
        wayOfMagicId: charInfo.wayOfMagicId,
        wayOfMagicName: charInfo.wayOfMagicName,
      }
      return charInfoMapped;
    }
        

    useEffect(() => {
      handleCharOwner();
      GetCharInfo();
    }, []);

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
            {characterInfo && <CardPadrao
                title={`${characterInfo.name} ${characterInfo.surname}`}
                content={
                  <div className="character-card">
                    <div className="character-portrait">
                      <img
                        src={characterInfo.characterAvatarUrl}
                        alt={`${characterInfo.name} Portrait`}
                      />
                    </div>
                    <div className="character-info">
                      <div className="character-personal-infos">
                      {characterInfo.name} {characterInfo.surname} tem {characterInfo.age} anos. Ele é um mago {characterInfo.wayOfMagicName},
                        atualmente encontra-se em {" "}
                        <a href="#" className="link-info-character">
                          {characterInfo.currentLocationPoloName}
                        </a>
                        , passando um tempo em {" "}
                        <a href="#" className="link-info-character">
                          {characterInfo.currentLocationName}.
                        </a>
                      </div>

                      <div className="character-focus">
                      {characterInfo.name} gosta de <strong>passear</strong> durante suas
                        horas vagas e se esforça para{" "}
                        <strong>aprimorar habilidades </strong> visando ao sucesso
                        profissional.
                      </div>

                      <div className="character-thinking">
                        O que {characterInfo.name} anda pensando...
                        <span id="editar-thinking" onClick={handleOpenModal}><i className="fas fa-pencil-alt"></i></span>
                      </div>
                    </div>
                  </div>
                }
              />}

                
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
