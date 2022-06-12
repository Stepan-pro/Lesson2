import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IPosts} from "../../../models/IPosts";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPosts[]> {

  constructor(private postsServices: PostsService) {
  }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
return this.postsServices.getPosts()
  }
}
