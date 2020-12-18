import { createStore, combineReducers } from 'redux';
import LoginAuthReducer from '../redux_login/login_auth/login_auth.reducer';
const rootReducer = combineReducers(
    { login: LoginAuthReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;