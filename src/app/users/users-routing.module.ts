import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'home', component: ListUserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: ListUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
