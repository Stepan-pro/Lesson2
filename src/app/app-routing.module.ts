import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomeComponent} from "./app-component/home/home.component";

let routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren:()=> import('./users/users.module').then(m=> m.UsersModule)},
  {path: 'posts', loadChildren:()=> import('./posts/posts.module').then(m=> m.PostsModule)},
  {path: 'comments', loadChildren:()=> import('./comments/comment.module').then(m=> m.CommentModule)},
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
