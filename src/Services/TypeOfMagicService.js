import axios from 'axios';
import API_URL from './ApiUrlService';


const getTypesOfMagic = async () => {
    try {
        const response = await axios.get(`${API_URL()}TypeOfMagic/TiposDeMagia`);
        return response.data.map(type => ({ value: type.id, label: type.description }));
    } catch (error) {
        console.error('Erro ao buscar tipos de magia:', error);
        return [];
    }
}

export const typeOfMagicService = {
    getTypesOfMagic
}