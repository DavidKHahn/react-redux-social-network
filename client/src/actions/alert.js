import uuid from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id}
    });
    // After 3 seconds sends dispatch to remove alert
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}