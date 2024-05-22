import { createReducer, on } from '@ngrx/store';
import { IStudent } from '../../layouts/dashboard/pages/students/models';
import { authActions } from './auth.actions';

export interface AuthState {
    authUser: null | IStudent;
}

const initialState: AuthState = {
    authUser: null,
};

const MOCK_AUTH_USER: IStudent = {
    id: 1,
    createdAt: new Date(),
    email: 'email@mail.com',
    name: 'car',
    lastName: 'martinez',
    role: 'ADMIN',
};

export const authFeatureName = 'auth';

export const authReducer = createReducer(
    initialState,
    on(authActions.login, (state, action) => {
        if (
            action.payload.email !== 'user@mail.com' ||
            action.payload.password !== '123456'
        ) {
            alert('Correo o password incorrectos');
            return state;
        } else {
            localStorage.setItem(
                'accessToken',
                'fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds'
            );
            return {
                authUser: MOCK_AUTH_USER,
            };
        }
    }),

    on(authActions.logout, () => {
        localStorage.removeItem('accessToken');
        return initialState;
    })
);