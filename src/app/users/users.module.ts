import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users-component/users/users.component';
import {UserDataService} from "./user-services/user-data.service";
import { UserComponent } from './users-component/user/user.component';
import {UsersResolver} from "./user-services/resolves/users.resolver";
import { UserDetailsComponent } from './users-component/user-details/user-details.component';
import {UserResolver} from "./user-services/resolves/user.resolver";
import {UsersGuard} from "./user-services/guards/users.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserDataService,
    UsersResolver,
    UserResolver,
    UsersGuard
  ]
})
export class UsersModule { }
