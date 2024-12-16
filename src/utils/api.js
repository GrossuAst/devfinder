import axios from "axios";
import { API_URL } from "./constants";

export const requestUserData = (userName) => axios.get(`${API_URL + '/' + userName}`);
