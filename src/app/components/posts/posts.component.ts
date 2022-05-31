import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/IPost";
import {PostServices} from "../../services/post.services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[];

  constructor(private postsServices:PostServices) { }

  ngOnInit(): void {
    this.postsServices.getPosts().subscribe(res=> this.posts = res)
  }
}
