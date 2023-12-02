import axios from 'axios';
import API_URL from './ApiUrlService';
import { toastError, toastSuccess } from './ToastService';

const getTokenFromLocalStorage = () => {
    return localStorage.getItem('jwt');
};

const handleCharacterCreation = async (characterData) => {
    try {
        const url = `${API_URL()}Character/CriarChar`;
        const token = getTokenFromLocalStorage();

        if (!token) {
            throw new Error('Token de autenticação não encontrado');
        }

        const response = await axios.post(url, characterData, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        });

        toastSuccess(response.data.message); // Usando a mensagem de sucesso da API
         
        return response.data;
    } catch (error) {
        if (error.response) {
            // O servidor respondeu com um status fora do intervalo 2xx
            toastError(error.response.data.message); // Usando a mensagem de erro da API
        } else {
            // Erros não relacionados à resposta do servidor
            toastError('Erro ao criar personagem.');
        }
        return null;
    }
};

export const handleCharacterCreationService = {
    handleCharacterCreation
};
