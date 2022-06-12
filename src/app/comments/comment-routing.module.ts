import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {CommentsComponent} from "./comment-components/comments/comments.component";
import {CommentsResolver} from "./comments-service/resolves/comments.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {comments: CommentsResolver}
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
