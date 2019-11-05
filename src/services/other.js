import axios from "axios";
import { endPoint, PORT } from "../util/const";

/**
 * Gets the full list of categories
 */
export const getCategories = () => {
    return axios.get(`${endPoint}:${PORT}/other/categories`);
}

/**
 * Gets the full list of marks
 */
export const getMarks = () => {
    return axios.get(`${endPoint}:${PORT}/other/marks`);
}

/**
 * Gets the full list of presentation
 */
export const getPresentations = () => {
    return axios.get(`${endPoint}:${PORT}/other/presentations`);
}