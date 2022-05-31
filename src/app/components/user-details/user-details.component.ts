import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserDetails} from "../../models/IUserDetails";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: any;

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
        let {state: {data}} = history;
        this.userDetailsObj=data as IUserDetails;
      }
    )

    // this.activatedRoute.params.subscribe(res=>{
    //
    // })
  }

}


