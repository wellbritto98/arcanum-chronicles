import LoginBar from '../LoginBar';
import './TelaInicial.css'

function TelaInicial() {
    return (
        <section className='tela-inicial'>
            <main className='main-content-login' style={{backgroundImage: "url('/images/background.png')"}}>
                <LoginBar />
                
            </main>
        </section>
    );
}


export default TelaInicial;