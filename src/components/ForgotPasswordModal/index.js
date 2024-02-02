import React, { useState } from 'react';
import { authService } from '../../Services/AuthService.js';
import { toastError, toastSuccess } from '../../Services/ToastService.js';
import './ForgotPasswordModal.css';
import { spinnerService } from '../../Services/spinnerService.js';




const ForgotPasswordModal = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        spinnerService.show();
        try {
            const response = await authService.forgotPassword(email);
            toastSuccess("Email de recuperação de senha enviado com sucesso. Verifique sua caixa de entrada.");
        } catch (error) {
            toastError('Email não existe !');
            console.error(error.message);
        } finally {
            spinnerService.hide(); 
        }

    };

    return (

        <div className="modal fade" id="modalForgotPasswordForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-subtle">
                        <h5 className="modal-title">Esqueci a senha</h5>
                        <button type="button" id='close-modal-forgotPassword' className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="Form-email-forgot-password" className="form-label">Digite o se email cadastrado para recuperar a senha</label>
                                <input type="email" id="Form-email-forgot-password" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="submit" className="btn btn-warning">Enviar Email de Recuperação</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordModal;
