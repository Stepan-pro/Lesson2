import { Component, OnInit } from '@angular/core';
import {IPosts} from "../../../models/IPosts";
import {PostsService} from "../../posts-services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: IPosts[];

  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {
    this.postsServices.getPosts().subscribe(res=>this.post=res)
  }

}
