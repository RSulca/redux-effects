import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private _user: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this._user.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
