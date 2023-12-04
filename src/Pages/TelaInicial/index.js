import ForgotPasswordModal from '../../components/ForgotPasswordModal';
import LoginBar from '../../components/LoginBar';
import Mural from '../../components/Mural';
import RegisterModal from '../../components/RegisterModal';
import Header from '../../components/header';
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
                    <ForgotPasswordModal />
                </main>
            </section>
        </>
    );
}


export default TelaInicial;