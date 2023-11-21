import axios from 'axios';

const API_URL = 'https://localhost:7048/api/Usuario/'; // Substitua com a URL da sua API

const login = async (email, senha,) => {
  try {
    const response = await axios.post(API_URL + 'login', { email, senha });
    if (response.data.token) {

      document.cookie = `jwt=${response.data.token};expires=${new Date(response.data.tokenExpiresAt).toUTCString()};path=/`;
    }
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login', error);
    throw error;
  }
};

const register = async (email, dataNascimento, senha, confirmacaoSenha) => {
  try {
    await axios.post(API_URL + 'cadastro', {
      email,
      dataNascimento,
      senha,
      confirmacaoSenha
    });
    // Implemente qualquer lógica adicional após o cadastro bem-sucedido
    // Por exemplo, redirecionar para a tela de login ou exibir uma mensagem de sucesso
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error);
    throw error;
  }
};

export const authService = {
  login,
  register, // Adicione a função de cadastro ao objeto de serviço exportado
};
