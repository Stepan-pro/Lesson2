import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts-component/posts/posts.component";
import {PostsResolver} from "./posts-services/resolves/posts.resolver";
import {PostsDetailsComponent} from "./posts-component/posts-details/posts-details.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children:[
      {path: ':id', component: PostsDetailsComponent, resolve:{postsData: PostsResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
