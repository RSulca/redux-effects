import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as ua from '../../store/actions/users.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit, OnDestroy {

  users: User[];
  loading: boolean;
  error: any;
  subsU: Subscription;

  constructor(private st: Store<AppState>) {
    this.users = [];
    this.loading = true;
    this.error = null;
    this.subsU = this.st.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = loading;
      this.error = error;
    })
  }
  ngOnDestroy() {
    this.subsU.unsubscribe();
  }

  ngOnInit(): void {
    this.st.dispatch(ua.getUsers());
    // this._user.getUsers().subscribe((data) => {
    //   this.users = data;
    // })
  }

}
