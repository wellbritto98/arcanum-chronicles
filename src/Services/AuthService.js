import axios from 'axios';
import API_URL from './ApiUrlService';

// Substitua com a URL da sua API

const login = async (email, senha) => {
  try {
    const response = await axios.post(API_URL() + "Usuario/" + 'login', { email, senha });
    if (response.data.success) {
      document.cookie = `jwt=${response.data.data.token};expires=${new Date(response.data.data.tokenExpiresAt).toUTCString()};path=/`;
      return response.data;
    } else {
      // Trate o erro conforme necessário
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error('Erro ao fazer login', error);
    throw error;
  }
};

const register = async (email, dataNascimento, senha, confirmacaoSenha, aceitaTermos) => {
  try {
    const response = await axios.post(API_URL() + 'Usuario/' + 'cadastro', {
      email,
      dataNascimento,
      senha,
      confirmacaoSenha,
      aceitaTermos
    });


    return { message: response.data };
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error.response.data);
    throw new Error(error.response.data);
  }
};

export const authService = {
  login,
  register, // Adicione a função de cadastro ao objeto de serviço exportado
};
