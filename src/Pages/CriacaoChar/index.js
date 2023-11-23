import Layout from '../../Components/Layout';
import NavbarPadrao from '../../Components/NavbarPadrao';
import CardCreateChar from '../../Components/Card-Create-Char';
import './CriacaoChar.css';
import React, { useState, useEffect } from 'react';
import { nomeService } from '../../Services/NomeService.js';
import Select from 'react-select'; // Importe o React Select
import './CriacaoChar.css';


const CriacaoChar = () => {
    const [genero, setGenero] = useState('');
    const [nomes, setNomes] = useState([]);
    const [nomeSelecionado, setNomeSelecionado] = useState(null);
    const [sobrenomes, setSobrenomes] = useState([]);
    const [sobrenomeSelecionado, setSobrenomeSelecionado] = useState(null);

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
                        <form className='p-3'>
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

                            <h5 className='fw-bold mt-3'>Qual será seu nome?</h5>
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
                                />
                            </div>

                            <h5 className='fw-bold mt-3'>Polo de nascimento</h5>
                            <p>Temos dois polos, cada uma com caracteristicas distintas. A escolha não irá influenciar diretamente no desenvolvimento do seu personagem. É uma escolha totalmente para o seu “RP”.  </p>
                        </form>
                    }
                />
            </Layout>
        </div>
    );
};

export default CriacaoChar;
