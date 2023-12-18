import axios from "axios"

const BASE_URL = 'http://localhost:9000/inventario';

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL, config());
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}
