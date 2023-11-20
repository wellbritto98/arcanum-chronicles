import './Loginbar.css'


const LoginBar = () => {
    return (
        <section className="section-login d-flex justify-content-center align-items-center py-2">
            <form className="form-login text-white d-flex flex-column flex-md-row align-items-center">
                <input type="email" id="email" name="email" placeholder='Digite seu email' className="form-control me-md-2 mb-3 mb-md-0" />
                <input type="password" id="senha" placeholder='Digite sua senha' name="senha" className="form-control me-md-2 mb-3 mb-md-0" />
                <button type="submit" className="btn btn-warning">Entrar</button>
                <span className='additionals ms-3 d-flex flex-row'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label form-text" for="flexCheckDefault">
                            Lembrar senha
                        </label>
                    </div>
                    <a href="#" className="form-text align-self-start ms-md-2 mb-3 mb-md-0">Esqueci a senha</a>

                </span>
            </form>
        </section>




    )
}

export default LoginBar;