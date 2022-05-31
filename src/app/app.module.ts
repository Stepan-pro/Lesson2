import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    HomeComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomeComponent},
      {
        path: 'users-page',
        component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      },   {
        path: 'posts-page',
        component: PostsComponent,
        children: [
          {path: 'posts-details/:id', component: PostDetailsComponent}
        ]
      },

      // {path: 'user-details/:id', component: UserDetailsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
