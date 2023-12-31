import { useContext } from "react";
import { SettingsContext } from "../context/settings";

const useSettings = () => {
    return useContext(SettingsContext);
}

export default useSettings;