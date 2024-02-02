// nomeService.js
import axios from 'axios';
import API_URL from './ApiUrlService';

const getFemNames = async () => {
    try {

        const response = await axios.get(`${API_URL()}Name/NomesFem`);
        return response.data.map(name => ({ value: name.id, label: name.nameChar }));
    } catch (error) {
        console.error('Erro ao buscar nomes femininos:', error);
        return [];
    }
};

const getMaleNames = async () => {
    try {

        const response = await axios.get(`${API_URL()}Name/NomesMasc`);
        return response.data.map(name => ({ value: name.id, label: name.nameChar }));
    } catch (error) {
        console.error('Erro ao buscar nomes masculinos:', error);
        return [];
    }
};

const getSurnames = async () => {
    try {

        const response = await axios.get(`${API_URL()}Name/Sobrenomes`);
        return response.data.map(surname => ({ value: surname.id, label: surname.surnameChar }));
    } catch (error) {
        console.error('Erro ao buscar sobrenomes:', error);
        return [];
    }
}

export const nomeService = {
    getFemNames,
    getMaleNames,
    getSurnames
};
