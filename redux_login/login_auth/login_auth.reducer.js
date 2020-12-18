
const INITIAL_STATE = {
    email_id: '',
    password: '',
    list: [],
};

const LoginAuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return {
                ...state,
                email_id: action.payload
            };
        case 'ADD_PASSWORD':
            return {
                ...state,
                password: action.payload
            };
        case 'DONE':
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};

export default LoginAuthReducer;

