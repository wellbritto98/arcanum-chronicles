import LoginBar from '../../Components/LoginBar';
import Mural from '../../Components/Mural';
import RegisterModal from '../../Components/RegisterModal';
import Header from '../../Components/header';
import './TelaInicial.css'

function TelaInicial() {
    return (
        <>
            <Header />
            <section className='tela-inicial'>
                <main className='main-content-login'>
                    <LoginBar />
                    <Mural />
                    <RegisterModal />
                </main>
            </section>
        </>
    );
}


export default TelaInicial;