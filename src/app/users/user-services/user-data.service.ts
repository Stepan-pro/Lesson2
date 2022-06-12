import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {IUser} from "../../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(this._url)
      .pipe(
        map(value => value),
        catchError((err) => throwError('404'))
      )
  }

  getUser(id: string): Observable<IUser>{
    return this.httpClient.get<IUser>(this._url + '/' + id)
  }
}
