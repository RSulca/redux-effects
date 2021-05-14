import { createReducer, on } from '@ngrx/store';
import * as au from '../actions';
import { User } from '../../models/User';

export interface UsersState {
    users: User[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UsersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

const _usersReducer = createReducer(
    UsersInitialState,
    on(au.getUsers, (state) => ({ ...state, loading: true })),
    on(au.getUsersSuccess, (state, { users }) => ({ ...state, loading: false, loaded: true, users: [...users] })),
    on(au.getUsersError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: {  url: payload.url, 
                                                                                                                name: payload.name, 
                                                                                                                message: payload.message } }))
);

export function usersReducer(state, action) {
    return _usersReducer(state, action);
}