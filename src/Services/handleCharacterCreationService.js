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

        toastSuccess(response.data.message);
         
        return response.data;
    } catch (error) {
        if (error.response) {
           
            toastError(error.response.data.message); 
        } else {

            toastError('Erro ao criar personagem.');
        }
        return null;
    }
};

export const handleCharacterCreationService = {
    handleCharacterCreation
};
