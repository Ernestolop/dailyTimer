import { TOGGLE_ALERT, TOGGLE_MODAL, UPDATE_ALERT_TIMEOUT } from "./types";

const uiReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ALERT:
            if (action.payload.message) {
                return {
                    ...state,
                    alert: {
                        ...state.alert,
                        ...action.payload,
                    },
                };
            }
            return {
                ...state,
                alert: action.payload,
            };
        case TOGGLE_MODAL:
            if (action.payload.title) {
                return {
                    ...state,
                    timerKey: state.timerKey + 1,
                    modal: {
                        ...state.modal,
                        ...action.payload
                    },
                };
            }
            return {
                ...state,
                timerKey: state.timerKey + 1,
                modal: action.payload,
            };
        case UPDATE_ALERT_TIMEOUT:
            return {
                ...state,
                alertTimeout: action.payload,
            };
        default:
            return state;
    }
}

export default uiReducer;