import axios from "axios";
import { endPoint, PORT } from "../util/const";

/**
 * Gets the full list of categories
 */
export const getCategories = () => {
    return axios.get(`${endPoint}:${PORT}/other/categories`);
}