import Layout from '../../components/Layout';
import NavbarPadrao from '../../components/NavbarPadrao';
import CardCreateChar from '../../components/Card-Create-Char';
import './CriacaoChar.css';
import React, { useState, useEffect } from 'react';
import { nomeService } from '../../Services/NomeService.js';
import { regionService } from '../../Services/RegionService.js';
import { typeOfMagicService } from '../../Services/TypeOfMagicService.js';
import { charBackgroundService } from '../../Services/CharBackgroundService.js';
import { handleCharacterCreationService } from '../../Services/handleCharacterCreationService.js';
import Select from 'react-select'; // Importe o React Select
import './CriacaoChar.css';
import { toastError, toastSuccess } from '../../Services/ToastService.js';
import { useNavigate } from 'react-router-dom';
import { spinnerService } from '../../Services/spinnerService.js';



const CriacaoChar = () => {
    const [genero, setGenero] = useState('');
    const [nomes, setNomes] = useState([]);
    const [nomeSelecionado, setNomeSelecionado] = useState(null);
    const [sobrenomes, setSobrenomes] = useState([]);
    const [sobrenomeSelecionado, setSobrenomeSelecionado] = useState(null);
    const [polos, setPolos] = useState([]);
    const [selectedPolo, setSelectedPolo] = useState(null);
    const [typesOfMagic, setTypesOfMagic] = useState([]);
    const [childhoodBackgrounds, setChildhoodBackgrounds] = useState([]);
    const [fatherBackgrounds, setFatherBackgrounds] = useState([]);
    const [motherBackgrounds, setMotherBackgrounds] = useState([]);
    const [selectedTypeOfMagic, setSelectedTypeOfMagic] = useState(null);
    const [selectedChildhoodBackground, setSelectedChildhoodBackground] = useState(null);
    const [selectedFatherBackground, setSelectedFatherBackground] = useState(null);
    const [selectedMotherBackground, setSelectedMotherBackground] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNomes = async () => {

            if (genero === '1') {
                const nomesFemininos = await nomeService.getFemNames();
                setNomes(nomesFemininos);
            } else if (genero === '2') {
                const nomesMasculinos = await nomeService.getMaleNames();
                setNomes(nomesMasculinos);
            } else {
                setNomes([]);
            }
        };


        const fetchSobrenomes = async () => {
            const sobrenomes = await nomeService.getSurnames();
            setSobrenomes(sobrenomes);
        };



        fetchNomes();
        fetchSobrenomes();
    }, [genero]);


    useEffect(() => {
        const fetchPolos = async () => {
            const polosData = await regionService.getPolos();
            setPolos(polosData);
        };

        const fetchChildhoodBackgrounds = async () => {
            const backgrounds = await charBackgroundService.getChildhoodBackgrounds();
            setChildhoodBackgrounds(backgrounds);
        };

        const fetchFatherBackgrounds = async () => {
            const backgrounds = await charBackgroundService.getFatherBackgrounds();
            setFatherBackgrounds(backgrounds);
        };


        const fetchMotherBackgrounds = async () => {
            const backgrounds = await charBackgroundService.getMotherBackgrounds();
            setMotherBackgrounds(backgrounds);
        };

        const fetchTypesOfMagic = async () => {
            const typesOfMagicData = await typeOfMagicService.getTypesOfMagic();
            setTypesOfMagic(typesOfMagicData);
        };

        fetchFatherBackgrounds();
        fetchMotherBackgrounds();
        fetchChildhoodBackgrounds();
        fetchPolos();

        fetchTypesOfMagic();
    }, []); // Empty dependency array to run only once



    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Criar um objeto com os dados do formulário
        const characterData = {
            name: nomeSelecionado?.label,
            surname: sobrenomeSelecionado?.label,
            gender: genero === '1' ? 1 : 2, // Mapeando o gênero para 1 ou 2
            characterAvatarUrl: '', // Se você tiver um campo para URL do avatar, coloque aqui
            fatherBackgroundId: fatherBackgrounds.findIndex(bg => bg.label === selectedFatherBackground?.label) + 1,
            motherBackgroundId: motherBackgrounds.findIndex(bg => bg.label === selectedMotherBackground?.label) + 1,
            childhoodBackgroundId: childhoodBackgrounds.findIndex(bg => bg.label === selectedChildhoodBackground?.label) + 1,
            birthPoloId: polos.findIndex(polo => polo.label === selectedPolo?.label) + 1,
            typeOfMagicId: typesOfMagic.findIndex(magic => magic.label === selectedTypeOfMagic?.label) + 1,
        };
        spinnerService.show();
        try {
            const response = await handleCharacterCreationService.handleCharacterCreation(characterData);

            if (response && response.success) {
                navigate('/qualquer'); // Navega para a próxima página
            } else {
                console.log('Falha na criação do personagem.');
            }
        } catch (error) {
            console.error('Erro ao criar personagem:', error);
        } finally {
            spinnerService.hide(); // Esconde o spinner
        }
    };



    return (
        <div className='create-char'>
            <Layout>
                <NavbarPadrao />
                <CardCreateChar
                    title="Criação do seu personagem"
                    content={
                        <div className='p-3'>
                            <p>É aqui onde tudo se inicia, onde você dirá em qual região você deseja que seu personagem nasça, seu nome, algumas histórias de seu passado e se ele será um Mago ou não. Mas tome cuidado, essa decisão é muito importante. Pense bem na hora de escolher. As decisões tomadas aqui só serão reversíveis futuramente por meio da aquisição de Arcanics.</p>
                            <p>Antes de começarmos, leia novamente a nossa política de segurança e termos do jogo. É lá que deixaremos bem claro quais são os seus direitos entre outras informações sensíveis.</p>
                            <a href="#">Política de segurança e termos do jogo</a>
                        </div>
                    }
                />

                <CardCreateChar
                    title="Vamos começar por você"
                    content={
                        <form onSubmit={handleSubmit} className='p-3'>
                            <h5 className='fw-bold'>Qual é o seu gênero?</h5>
                            <select
                                className="form-select w-100 w-md-25"
                                aria-label="Selecione um genero"
                                value={genero}
                                onChange={(e) => setGenero(e.target.value)}
                            >
                                <option value="">Selecione um gênero</option>
                                <option value="1">Feminino</option>
                                <option value="2">Masculino</option>
                            </select>

                            <h5 className='fw-bold mt-5'>Qual será seu nome?</h5>
                            <p>Temos uma vasta lista de nomes e sobrenomes disponíveis. Escolha atentamente.</p>
                            <p>Para selecionar um nome, você antes deve escolher seu gênero.</p>
                            <div className='d-flex flex-column flex-md-row'>
                                <Select
                                    options={nomes}
                                    onChange={setNomeSelecionado}
                                    value={nomeSelecionado}
                                    className="w-100 w-md-50 pe-md-3 mb-3 mb-md-0"
                                    placeholder="Procure por um nome"
                                    isDisabled={!genero}
                                />
                                <Select
                                    options={sobrenomes}
                                    onChange={setSobrenomeSelecionado}
                                    value={sobrenomeSelecionado}
                                    className="w-100 w-md-50"
                                    placeholder="Procure por um sobrenome"
                                    isDisabled={!genero}
                                />
                            </div>

                            <h5 className='fw-bold mt-5'>Polo de nascimento</h5>
                            <p>Temos dois polos, cada uma com caracteristicas distintas. A escolha não irá influenciar diretamente no desenvolvimento do seu personagem. É uma escolha totalmente para o seu “RP”.  </p>
                            <Select
                                options={polos}
                                onChange={setSelectedPolo} // Use setSelectedPolo here
                                value={selectedPolo}
                                className="w-100 w-md-50"
                                placeholder="Escolha um polo"
                            />
                            <h5 className='fw-bold mt-5'>
                                Sobre o seu passado
                            </h5>
                            <h6 className='fw-bold mt-5'>
                                Infância
                            </h6>
                            <Select
                                options={childhoodBackgrounds}
                                onChange={setSelectedChildhoodBackground}
                                value={selectedChildhoodBackground}
                                className="w-100 w-md-50"
                                placeholder="Escolha um background de infância" />

                            <h6 className='fw-bold mt-3'>
                                Pai
                            </h6>
                            <Select
                                options={fatherBackgrounds}
                                onChange={setSelectedFatherBackground}
                                value={selectedFatherBackground}
                                className="w-100 w-md-50"
                                placeholder="Escolha um background de pai" />

                            <h6 className='fw-bold mt-3'>
                                Mãe
                            </h6>
                            <Select
                                options={motherBackgrounds}
                                onChange={setSelectedMotherBackground}
                                value={selectedMotherBackground}
                                className="w-100 w-md-50"
                                placeholder="Escolha um background de mãe" />

                            <h5 className='fw-bold mt-5'>
                                Seu Relacionamento com a magia
                            </h5>
                            <p >
                                Disponibilizamos três tipos de relacionamento com a magia. O Não-magico, Magico e mestiço. Basicamente ou você tem acesso a magia ou não. Você ser mestiço ou magico não afetará na sua gameplay dentro do jogo.
                            </p>
                            <p>
                                Por outra via, a decisão de ser uma pessoa sem acesso a magia lhe afetará diretamente, você não terá nenhum acesso a funcionalidades que necessitem de magia, e bom... O jogo praticamente inteiro é baseado nisto. Então ser uma pessoa não-magica é apenas uma opção de RP que adicionamos.
                            </p>
                            <Select
                                options={typesOfMagic}
                                onChange={setSelectedTypeOfMagic}
                                value={selectedTypeOfMagic}
                                className="w-100 w-md-50"
                                placeholder="Escolha um tipo de magia" />

                            <button type='submit' className='btn btn-warning mt-5'>Criar personagem</button>
                        </form>
                    }
                />
            </Layout>
        </div>
    );
};

export default CriacaoChar;
