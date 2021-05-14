import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as ua from '../actions';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { of } from "rxjs";

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private _user: UserService) {
    }

    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(ua.getUser),
        tap(data => console.log('effect tap', data)),
        mergeMap(
            (action) => this._user.getUser(action.id).pipe(
                tap(res=>console.log('tap res', res)),
                map((data: User) => ua.getUserSuccess({ user: data })),
                catchError((error: any) => of(ua.getUserError({ payload: error })))
            )
        )
    ))

}