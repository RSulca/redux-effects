import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as ua from '../actions/users.actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { of } from "rxjs";

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions, private _user: UserService) {
    }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(ua.getUsers),
        tap(data => console.log('effect tap', data)),
        mergeMap(
            () => this._user.getUsers().pipe(
                map((data: User[]) => ua.getUsersSuccess({ users: data })),
                catchError((error: any) => of(ua.getUsersError({ payload: error })))
            )
        )   
    ))

}