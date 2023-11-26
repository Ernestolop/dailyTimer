import { useContext } from "react";
import { UiContext } from "../context/ui";

const useSettings = () => {
    return useContext(UiContext);
}

export default useSettings;