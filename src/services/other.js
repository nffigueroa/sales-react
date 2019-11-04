import axios from "axios";

/**
 * Gets the full list of categories
 */
export const getCategories = () => {
    return axios.get(`${endPoint}:${PORT}/other/categories`);
}