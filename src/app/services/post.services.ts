import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostServices {

  private _urls = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._urls)
  }

  // getUser(id: string): Observable<IUser>{
  //   return this.http.get<IUser>(this._url+'/'+ id)
  // }

}
