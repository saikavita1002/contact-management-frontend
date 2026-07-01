/*import axios from "axios"; */
const API_URL= "https://contact-management-backend-ws4m.onrender.com";
const API_POST_URL=API_URL+"/create";
const API_GET_ALL_CONTACT_URL=API_URL+"/contact-list";
const API_GET_BY_ID_URL=API_URL+"/find-by";
const API_UPDATE_URL=API_URL+"/update-by-id";
const API_DELETE_URL=API_URL+"/delete-by-id";
/*
export const createContact = (contactData) => axios.post(API_POST_URL,contactData);
export const getAllContacts = () => axios.get(API_GET_ALL_CONTACT_URL)
export const getContactById = (id) => axios.get(API_GET_BY_ID_URL+ '/'+ id);
export const deleteContact =  (id) => axios.delete(API_DELETE_URL + '/'+ id);
export const updateContact = (id, contact) =>axios.put(API_UPDATE_URL + '/' + id, contact);
*/
/***********************************************/
/* import authApi from "./authApi";
/***********************************************/

import authApi from "./authApi";

export const createContact = (contactData) =>
    authApi.post(API_POST_URL, contactData);

export const getAllContacts = () =>
    authApi.get(API_GET_ALL_CONTACT_URL);

export const getContactById = (id) =>
    authApi.get(`${API_GET_BY_ID_URL}/${id}`);

export const deleteContact = (id) =>
    authApi.delete(`${API_DELETE_URL}/${id}`);

export const updateContact = (id, contact) =>
    authApi.put(`${API_UPDATE_URL}/${id}`, contact);

/*import axios from "axios";

const API_URL = "http://localhost:5000"; // Change as per your backend URL

// Create Contact
export const createContact = async (contactData) => {
    const response = await axios.post(
        `${API_URL}/create`,
        contactData
    );
    return response.data;
};

// Get all contacts
export const getAllcontacts = async () => {
    const response = await axios.get(
        `${API_URL}/contact-list`
    );
    return response.data;
};

// Get contact by ID
export const getcontactbyID = async (id) => {
    const response = await axios.get(
        `${API_URL}/find-by/${id}`
    );
    return response.data;
};

// Get contact by valid ID
export const getcontactbyvalidID = async (id) => {
    const response = await axios.get(
        `${API_URL}/find-by-valid-id/${id}`
    );
    return response.data;
};

// Update Contact
export const updateContact = async (id, updatedData) => {
    const response = await axios.put(
        `${API_URL}/update-contact-by-id/${id}`,
        updatedData
    );
    return response.data;
};
// Update Contact
export const deleteContact = async (id) => {
    const response = await axios.delete(
        `${API_URL}/delete-by-id/${id}`,
    );
    return response.data;
};*/
