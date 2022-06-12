import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts-component/posts/posts.component';
import { PostComponent } from './posts-component/post/post.component';
import {PostsResolver} from "./posts-services/resolves/posts.resolver";
import { PostsDetailsComponent } from './posts-component/posts-details/posts-details.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostsModule,
    PostsResolver
  ]
})
export class PostsModule { }
