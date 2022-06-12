import {Component, Input, OnInit} from '@angular/core';
import {UserDataService} from "../../user-services/user-data.service";
import {IUser} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: IUser[];

  constructor(private userService: UserDataService,
              private ActivateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.ActivateRoute.data.subscribe(({UsersData}) => this.user = UsersData));
  }

}
