import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IComments} from "../../../models/IComments";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComments[]> {

  constructor(private commentsServices: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComments[]> | Promise<IComments[]> | IComments[] {
    return this.commentsServices.getComments()
  }
}
