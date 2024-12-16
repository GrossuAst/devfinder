import { requestUserData } from "../../utils/api";

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

export function updateUser(userName) {
    return function(dispatch) {
        dispatch({
            type: GET_USER_DATA,
        });
        requestUserData(userName)
            .then((res) => {
                if(res.data) {
                    dispatch({
                        type: GET_USER_DATA_SUCCESS,
                        payload: res.data
                    })
                }
            })
            .catch((err) => {

            })
            .finally(() => {

            })
    }
}