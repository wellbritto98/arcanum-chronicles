import React from 'react';

const RegisterModal = () => {
    return (
        <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crie sua conta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <input type="email" id="Form-email" className="form-control" placeholder='Email' />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="Form-password" className="form-control" placeholder='Senha' />
                        </div>
                        <div className="mb-3">
                            <input type="password" id="Form-confirm-password" className="form-control" placeholder='Confirme a senha' />
                        </div>
                        <div className="mb-3">
                            <input type="date" id="Form-birthdate" className="form-control" placeholder='Data de nascimento' />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-warning">Registrar-se</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
