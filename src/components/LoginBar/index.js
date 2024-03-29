import './Loginbar.css'
import React, { useState } from 'react';
import { authService } from '../../Services/AuthService.js';
import { useNavigate } from 'react-router-dom';
import { toastSuccess, toastError, toastInfo } from '../../Services/ToastService.js';
import { spinnerService } from '../../Services/spinnerService.js';
import { jwtDecode } from 'jwt-decode';


const LoginBar = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); 




    const handleSubmit = async (event) => {
        event.preventDefault();
        spinnerService.show();
        try {
            const response = await authService.login(email, senha);
            toastSuccess("Login efetuado com sucesso!");
            let token = jwtDecode(localStorage.getItem('jwt'));

            let mainCharId = token.MainCharacterId;
            let hasChar = token.hasCharacter;


            console.log(token)
            console.log(mainCharId)
            console.log(hasChar)
            
     
            if (hasChar && mainCharId !== 0) {
              
                navigate(`/Character/${mainCharId}`);
            } else {
                
                navigate('/criacao-char');
            }
        } catch (error) {
            toastError(error.message);
        } finally {
            spinnerService.hide(); 
        }
    };

    return (
        <section className="section-login d-flex justify-content-center align-items-center py-2">
            <form className="form-login text-white d-flex flex-column flex-md-row align-items-center" onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder='Digite seu email' className="form-control me-md-2 mb-3 mb-md-0" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="senha" placeholder='Digite sua senha' name="senha" className="form-control me-md-2 mb-3 mb-md-0" onChange={(e) => setSenha(e.target.value)} />
                <button type="submit" className="btn btn-warning">Entrar</button>
              
                <span className='additionals ms-3 d-flex flex-row'>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label form-text" for="flexCheckDefault">
                            Lembrar senha
                        </label>
                    </div>

                </span>
            </form>
            <button className="bg-transparent text-white text-decoration-underline border-0 p-0 align-self-start ms-md-3 mb-3 mb-md-0 fs-6" data-bs-toggle="modal" data-bs-target="#modalForgotPasswordForm">Esqueci a senha</button>

        </section>




    )
}

export default LoginBar;