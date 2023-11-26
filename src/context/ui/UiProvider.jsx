import { useReducer } from "react";
import PropTypes from 'prop-types';
import { UiContext, uiReducer, TOGGLE_ALERT, TOGGLE_MODAL, UPDATE_ALERT_TIMEOUT } from ".";

const UI_INITIAL_STATE = {
    modal: {
        title: '',
        type: ''
    },
    alert: {
        type: '',
        message: ''
    },
    alertTimeout: null,
    timerKey: 0
};

const UiProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const handleModal = content => {
        if (state.modal.title) {
            console.log('close modal');
            dispatch({ type: TOGGLE_MODAL, payload: {} });
            return;
        }
        dispatch({ type: TOGGLE_MODAL, payload: content });
    }

    const handleAlert = (message, type = 'danger', time = 3000) => {
        if (state.alertTimeout) {
            clearTimeout(state.alertTimeout);
            dispatch({ type: UPDATE_ALERT_TIMEOUT, payload: null });
            dispatch({ type: TOGGLE_ALERT, payload: {} });
            setTimeout(() => {
                newAlert(message, type, time);
            }, 50);
            return;
        }
        newAlert(message, type, time);
    }

    const newAlert = (message, type = 'error', time = 3000) => {
        document.documentElement.style.setProperty('--alert-time', `${time}ms`);
        dispatch({ type: TOGGLE_ALERT, payload: { type, message } });

        const timeoutId = setTimeout(() => {
            dispatch({ type: TOGGLE_ALERT, payload: {} });
            dispatch({ type: UPDATE_ALERT_TIMEOUT, payload: null });
        }, time);

        dispatch({ type: UPDATE_ALERT_TIMEOUT, payload: timeoutId });
    }

    return (
        <UiContext.Provider value={{
            ...state,
            //Methods
            handleModal,
            handleAlert
        }}>
            {children}
        </UiContext.Provider>
    )
}

UiProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default UiProvider;

