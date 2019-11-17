import { GOOGLE_SIGNIN } from '../actions/auth';

const initialState = {
    isLoggedIn: false,
    email: ''    
}

const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GOOGLE_SIGNIN:
            // console.log("GOOGLE_SIGNIN authReducer is kicked. The current state is: ");
            // console.log(state);
            return { ...state, email: action.email, isLoggedIn: true };
        default:
            return state;
    }
}

export default authReducer;