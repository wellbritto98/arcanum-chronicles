import Layout from '../../Components/Layout';
import NavbarPadrao from '../../Components/NavbarPadrao';
import CardCreateChar from '../../Components/Card-Create-Char';
import './CriacaoChar.css';

const CriacaoChar = () => {
    return (
        <>
            <NavbarPadrao />
            <Layout>
                <CardCreateChar
                    title="Criação do seu personagem"
                    content={
                        <div>
                            <p>É aqui onde tudo se inicia, onde você dirá em qual região você deseja que seu personagem nasça, seu nome, algumas histórias de seu passado e se ele será um Mago ou não. Mas tome cuidado, essa decisão é muito importante. Pense bem na hora de escolher. As decisões tomadas aqui só serão reversíveis futuramente por meio da aquisição de Arcanics.</p>
                            <p>Antes de começarmos, leia novamente a nossa política de segurança e termos do jogo. É lá que deixaremos bem claro quais são os seus direitos entre outras informações sensíveis.</p>
                            <a href="#">Política de segurança e termos do jogo</a>
                        </div>
                    }
                />
            </Layout>
        </>
    );
};

export default CriacaoChar;
