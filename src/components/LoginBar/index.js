import './Loginbar.css'


const LoginBar = () => {
    return (
        <section className='section-login'>
            <form className='form-login'>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="senha">Senha</label>
            <span className='password'>
            <input type="password" id="senha" name="senha" />
            <a href="#">Esqueceu sua senha?</a>
            </span>
            <button type="submit">Entrar</button>
            </form>


        </section>
        )
}

export default LoginBar;