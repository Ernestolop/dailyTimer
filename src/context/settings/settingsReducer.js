import { UPDATE_MAX_TIME_SECONDS } from '.'

const settingsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MAX_TIME_SECONDS:
            return {
                ...state,
                maxTimeSeconds: action.payload
            };
        default:
            return state;
    }
}

export default settingsReducer;