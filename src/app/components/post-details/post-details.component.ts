import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPostDetails} from "../../models/IPostDetails";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetailsObj: any;

  constructor(private  activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      let {state: {data}} = history;
      this.postDetailsObj = data as IPostDetails
    })
  }

}
