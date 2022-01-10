import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '26d94ecd85msh7d9298eab17cdd3p166064jsn3a70ea754a11'
        }
    });

    return data;
}
