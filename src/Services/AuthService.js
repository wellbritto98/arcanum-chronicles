import axios from 'axios';
import API_URL from './ApiUrlService';
import { jwtDecode } from 'jwt-decode';



const login = async (email, senha) => {
  try {
    const response = await axios.post(API_URL() + "Usuario/" + 'login', { email, senha });
    if (response.data.success) {
      // Salvar o token JWT no Local Storage
      localStorage.setItem('jwt', response.data.data.token);
      localStorage.setItem('jwtExpiresAt', response.data.data.tokenExpiresAt);

      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response) {
      // Erro vindo da resposta do servidor
      console.error('Erro ao fazer login', error.response.data.message);
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // O pedido foi feito, mas nenhuma resposta foi recebida
      console.error('Erro ao fazer login: Nenhuma resposta do servidor');
      throw new Error('Erro ao fazer login: Nenhuma resposta do servidor');
    } else {
      // Algo aconteceu na configuração do pedido que desencadeou um erro
      console.error('Erro ao fazer login', error.message);
      throw error;
    }
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


const isTokenValid = async () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(API_URL() + 'Usuario/VerificaJWT?token=' + token);

    return response.data === "Token válido!";
  } catch (error) {
    console.error('Erro ao verificar a validade do token', error);
    return false;
  }
};

const forgotPassword = async (email) => {
  try {
    // Constructing the URL with the query parameter
    const url = new URL(API_URL() + 'Usuario/EsqueciMinhaSenha');
    url.searchParams.append('email', encodeURI(email));

    // Making a POST request with the constructed URL
    const response = await axios.post(url.toString());
    return response.data;
  } catch (error) {
    console.error('Error requesting password reset', error);
    throw new Error(error.response?.data || 'Error requesting password reset');
  }
};



export const authService = {
  login,
  register,
  isTokenValid,
  forgotPassword
};


