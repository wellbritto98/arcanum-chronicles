import axios from 'axios';
import API_URL from './ApiUrlService';
import { jwtDecode } from 'jwt-decode';



const login = async (email, senha) => {
  try {
    const response = await axios.post(API_URL() + "Usuario/" + 'login', { email, senha });
    if (response.data.success) {

      localStorage.setItem('jwt', response.data.data);

      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    if (error.response) {

      console.error('Erro ao fazer login', error.response.data.message);
      throw new Error(error.response.data.message);
    } else if (error.request) {

      console.error('Erro ao fazer login: Nenhuma resposta do servidor');
      throw new Error('Erro ao fazer login: Nenhuma resposta do servidor');
    } else {

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

    const url = new URL(API_URL() + 'Usuario/EsqueciMinhaSenha');
    url.searchParams.append('email', encodeURI(email));


    const response = await axios.post(url.toString());
    return response.data;
  } catch (error) {
    console.error('Error requesting password reset', error);
    throw new Error(error.response?.data || 'Error requesting password reset');
  }
};

const verifyCharOwnership = async (charId) => {
  try {
    const token = localStorage.getItem('jwt'); // Obtendo o token JWT do localStorage
    if (!token) {
      throw new Error('Não autenticado');
    }
    const url = `${API_URL()}Character/VerifyCharOwner?id=${charId}`;
    console.log(url);

    const response = await axios.get(url, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao verificar a propriedade do personagem', error);
    throw new Error(error.response?.data || 'Erro ao verificar a propriedade do personagem');
  }


};



export const authService = {
  login,
  register,
  isTokenValid,
  forgotPassword,
  verifyCharOwnership

};


