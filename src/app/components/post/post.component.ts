import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/IPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost


  constructor( private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateMe(post: IPost): void {
    this.router.navigate(['posts-details', post.id], {relativeTo: this.activatedRoute, state:{data:post}})
  }

}
