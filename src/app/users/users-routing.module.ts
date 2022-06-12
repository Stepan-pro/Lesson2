import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-component/users/users.component";
import {UsersResolver} from "./user-services/resolves/users.resolver";
import {UserDetailsComponent} from "./users-component/user-details/user-details.component";
import {UserResolver} from "./user-services/resolves/user.resolver";
import {UsersGuard} from "./user-services/guards/users.guard";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {UsersData: UsersResolver},
    canDeactivate:[UsersGuard],
    canActivate: [UsersGuard],
    children: [
      {path: ":id", component: UserDetailsComponent, resolve: {userData: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
