import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as ua from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  loading: boolean;
  error: any;
  subsU: Subscription;


  constructor(private router: ActivatedRoute, private st: Store<AppState>) {
    this.user = new User(0,'','','','');
    this.error = null;
    this.loading = true;
    this.subsU = this.st.select('user').subscribe(({ user, loading, error }) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      this.st.dispatch(ua.getUser({ id }));
    })
  }

  ngOnDestroy(){
    this.subsU.unsubscribe();
  }

}
