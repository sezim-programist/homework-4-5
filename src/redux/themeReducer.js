const initialState = {
    isDark: false
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_THEME":
            return {...state, isDark: !state.isDark}
            break;
        default:
            return state
    }
}

export default themeReducer