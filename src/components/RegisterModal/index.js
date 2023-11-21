import './RegisterModal.css';
import React, { useState } from 'react';
import { authService } from '../../Services/AuthService.js';// Verifique se o caminho está correto

const RegisterModal = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            // Formata a data de nascimento para o padrão ISO com hora e fuso horário (Z).
            const dataNascimentoISO = `${dataNascimento}T00:00:00.954Z`

            // Chama a função de registro do serviço de autenticação
            await authService.register(email, dataNascimentoISO, senha, confirmacaoSenha);
            alert('Usuário cadastrado com sucesso!');
            // Aqui você pode implementar a lógica de redirecionamento ou manipulação pós-registro
        } catch (error) {
            alert('Erro ao registrar usuário:', error);
            console.log(email)
            console.log(senha)
            console.log(confirmacaoSenha)
            console.log(`${dataNascimento}T00:00:00.954Z`)

        }
    };

    return (
        <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crie sua conta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <input type="email" id="Form-email" className="form-control" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="password" id="Form-password" className="form-control" placeholder='Senha' onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="password" id="Form-confirm-password" className="form-control" placeholder='Confirme a senha' onChange={(e) => setConfirmacaoSenha(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="date" id="Form-birthdate" className="form-control" placeholder='Data de nascimento' onChange={(e) => setDataNascimento(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-warning">Registrar-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
