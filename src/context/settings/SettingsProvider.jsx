import { useReducer } from "react";
import PropTypes from 'prop-types';
import { SettingsContext, settingsReducer, UPDATE_MAX_TIME_SECONDS } from ".";

let maxTimeSecondsLs = localStorage.getItem('maxTimeSeconds');
if (!maxTimeSecondsLs) {
    maxTimeSecondsLs = 120;
    localStorage.setItem('maxTimeSeconds', maxTimeSecondsLs);
}

const SETTINGS_INITIAL_STATE = {
    maxTimeSeconds: maxTimeSecondsLs,
};

const SettingsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(settingsReducer, SETTINGS_INITIAL_STATE);

    const updateMaxTimeSeconds = (newMaxTimeSeconds) => {

        dispatch({
            type: UPDATE_MAX_TIME_SECONDS,
            payload: newMaxTimeSeconds
        });
        localStorage.setItem('maxTimeSeconds', newMaxTimeSeconds);
    }

    return (
        <SettingsContext.Provider value={
            {
                ...state,
                //Methods
                updateMaxTimeSeconds
            }
        }>
            {children}
        </SettingsContext.Provider>
    )
}

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default SettingsProvider;
