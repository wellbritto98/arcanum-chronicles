import LoginBar from '../LoginBar';
import Mural from '../Mural';
import RegisterModal from '../RegisterModal';
import './TelaInicial.css'

function TelaInicial() {
    return (
        <section className='tela-inicial'>
            <main className='main-content-login'>
                <LoginBar />
                <Mural />
                <RegisterModal/>
            </main>
        </section>
    );
}


export default TelaInicial;