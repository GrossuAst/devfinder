import axios from "axios";
import { API_URL } from "./constants";

export const getUserData = (userName) => axios.get(`${API_URL + '/' + userName}`);
