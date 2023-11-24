import axios from 'axios';
import API_URL from './ApiUrlService';

const getPolos = async () => {

    try {
        const response = await axios.get(`${API_URL()}Region/Polos`);
        return response.data.map(polo => ({ value: polo.id, label: polo.name, group: polo.regionId }));
    } catch (error) {
        console.error('Erro ao buscar polos:', error);
        return [];
    }

};

export const regionService = {
    getPolos
}