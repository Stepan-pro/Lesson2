import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CommentsComponent } from './comment-components/comments/comments.component';
import { CommentComponent } from './comment-components/comment/comment.component';
import {CommentRoutingModule} from "./comment-routing.module";
import {CommentsResolver} from "./comments-service/resolves/comments.resolver";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentModule,
    CommentsResolver
  ]
})
export class CommentModule { }
