import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const getUsers = createAction('[Users Components] Get Users');
export const getUsersSuccess = createAction('[Users Components] Get Users Success', props<{ users: User[] }>());
export const getUsersError = createAction('[Users Components] Get Users Error', props<{ payload: any }>());