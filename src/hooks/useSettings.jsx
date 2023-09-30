import { useContext } from "react";
import SettingsContext from "../context/SettingsProvider";

const useSettings = () => {
    return useContext(SettingsContext);
}

export default useSettings;