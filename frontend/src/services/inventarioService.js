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
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}

