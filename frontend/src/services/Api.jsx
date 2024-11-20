import axios from 'axios';

const API_KEY = '27adda5772dd432aaea834a249cdd39b';
const BASE_URL = 'https://api.spoonacular.com';

export const fetchRecipes = async (query) => {
    const {data} = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
        params: {query, apiKey: API_KEY}
    });
    return data.results;
};
