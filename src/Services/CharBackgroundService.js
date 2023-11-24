import axios from 'axios';
import API_URL from './ApiUrlService';

const getChildhoodBackgrounds = async () => {
    try {
        const response = await axios.get(`${API_URL()}CharBackground/ChildhoodBackgrounds`);
        return response.data.map(background => ({ value: background.id, label: background.description }));
    } catch (error) {
        console.error('Erro ao buscar backgrounds de infância:', error);
        return [];
    }
}

const getFatherBackgrounds = async () => {
    try {
        const response = await axios.get(`${API_URL()}CharBackground/FatherBackgrounds`);
        return response.data.map(background => ({ value: background.id, label: background.description }));
    } catch (error) {
        console.error('Erro ao buscar backgrounds de pai:', error);
        return [];
    }
}

const getMotherBackgrounds = async () => {
    try {
        const response = await axios.get(`${API_URL()}CharBackground/MotherBackgrounds`);
        return response.data.map(background => ({ value: background.id, label: background.description }));
    } catch (error) {
        console.error('Erro ao buscar backgrounds de mãe:', error);
        return [];
    }
}

export const charBackgroundService = {
    getChildhoodBackgrounds,
    getFatherBackgrounds,
    getMotherBackgrounds
};
