const initialState = {
    name: "", age: "", email: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_USER_INFO":
            return {...state, ...action.payload}
            break;
        default:
            return state
    }
}

export default userReducer

