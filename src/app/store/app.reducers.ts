import { ActionReducerMap } from '@ngrx/store';
import * as ur from './reducers';

export interface AppState {
    users: ur.UsersState,
    user: ur.UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: ur.usersReducer,
    user: ur.userReducer,
}