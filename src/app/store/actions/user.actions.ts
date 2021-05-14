import { createAction, props } from '@ngrx/store';
import { User } from '../../models/User';

export const getUser = createAction('[User Components] Get User', props<{ id: number }>());
export const getUserSuccess = createAction('[User Components] Get User Success', props<{ user: User }>());
export const getUserError = createAction('[User Components] Get User Error', props<{ payload: any }>());