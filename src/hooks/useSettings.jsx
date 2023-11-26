import { useContext } from "react";
import { SettingsContext } from "../context";

const useSettings = () => {
    return useContext(SettingsContext);
}

export default useSettings;