import { useState, createContext } from "react";

const SettingsContext = createContext();

let maxTimeSecondsLs = localStorage.getItem('maxTimeSeconds');
if (!maxTimeSecondsLs) {
    maxTimeSecondsLs = 120;
    localStorage.setItem('maxTimeSeconds', maxTimeSecondsLs);
}

const SettingsProvider = ({ children }) => {

    const [maxTimeSeconds, setMaxTimeSeconds] = useState(maxTimeSecondsLs);
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [alert, setAlert] = useState({});
    const [alertTimeout, setAlertTimeout] = useState(null);


    const updateMaxTimeSeconds = (newMaxTimeSeconds) => {
        setMaxTimeSeconds(newMaxTimeSeconds);
        localStorage.setItem('maxTimeSeconds', newMaxTimeSeconds);
    }

    const handleModal = (content) => {
        if (modal) {
            setModal(false);
            return;
        }
        setModalContent(content);
        setModal(true);
    }

    const handleAlert = (message, type = 'danger', time = 3000) => {
        if (alertTimeout) {
            clearTimeout(alertTimeout);
            setAlertTimeout(null);
            setAlert({});
            setTimeout(() => {
                newAlert(message, type, time);
            }, 50);
            return;
        }
        newAlert(message, type, time);
    }

    const newAlert = (message, type = 'error', time = 3000) => {
        document.documentElement.style.setProperty('--alert-time', `${time}ms`);
        setAlert({
            type,
            message
        });

        const timeoutId = setTimeout(() => {
            setAlert({});
            setAlertTimeout(null);
        }, time);

        setAlertTimeout(timeoutId);
    }

    return (
        <SettingsContext.Provider value={
            {
                maxTimeSeconds,
                updateMaxTimeSeconds,
                modal,
                handleModal,
                modalContent,
                alert,
                handleAlert
            }
        }>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext;
export { SettingsProvider };
