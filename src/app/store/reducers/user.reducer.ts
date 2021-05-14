import { createReducer, on } from '@ngrx/store';
import * as au from '../actions';
import { User } from '../../models/User';

export interface UserState {
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UserInitialState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

const _userReducer = createReducer(
    UserInitialState,
    on(au.getUser, (state, { id }) => ({ ...state, loading: true })),
    on(au.getUserSuccess, (state, { user }) => ({ ...state, error:null, loading: false, loaded: true, user: { ...user } })),
    on(au.getUserError, (state, { payload }) => ({
        ...state, loading: false, loaded: false, user:null, error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    }))
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}