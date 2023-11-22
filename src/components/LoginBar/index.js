import './Loginbar.css'
import React, { useState } from 'react';
import { authService } from '../../Services/AuthService.js';
import { useNavigate } from 'react-router-dom';

const LoginBar = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await authService.login(email, senha);
            alert('Login bem-sucedido: ' + response.message);
            navigate('/criacao-char'); // Navega para a página de criação de personagem
        } catch (error) {
            alert('Erro no login: ' + error.message);
        }
    };

    return (
        <section className="section-login d-flex justify-content-center align-items-center py-2">
            <form className="form-login text-white d-flex flex-column flex-md-row align-items-center" onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder='Digite seu email' className="form-control me-md-2 mb-3 mb-md-0" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="senha" placeholder='Digite sua senha' name="senha" className="form-control me-md-2 mb-3 mb-md-0" onChange={(e) => setSenha(e.target.value)} />
                <button type="submit" className="btn btn-warning">Entrar</button>
                {/* Resto do seu código */}
                <span className='additionals ms-3 d-flex flex-row'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label form-text" for="flexCheckDefault">
                            Lembrar senha
                        </label>
                    </div>
                    <a href="www.youtube.com" className="form-text align-self-start ms-md-2 mb-3 mb-md-0">Esqueci a senha</a>

                </span>
            </form>
        </section>




    )
}

export default LoginBar;