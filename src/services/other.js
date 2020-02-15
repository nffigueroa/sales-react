import axios from 'axios'
import { endPoint, PORT, API_VERSION } from '../util/const'

/**
 * Gets the full list of categories
 */
export const getCategories = () => {
  return axios.get(`${endPoint}:${PORT}/${API_VERSION}/other/categories`)
}

/**
 * Gets the full list of marks
 */
export const getMarks = () => {
  return axios.get(`${endPoint}:${PORT}/${API_VERSION}/other/marks`)
}

/**
 * Gets the full list of presentation
 */
export const getPresentations = () => {
  return axios.get(`${endPoint}:${PORT}/${API_VERSION}/other/presentations`)
}

export const getMeasurements = () => {
  return axios.get(`${endPoint}:${PORT}/${API_VERSION}/other/measurements`)
}

export const getCities = () => {
  return axios.get(`${endPoint}:${PORT}/${API_VERSION}/other/cities`)
}
