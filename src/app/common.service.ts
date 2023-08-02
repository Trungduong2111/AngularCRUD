import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url = "http://localhost:3000/";
  constructor(private http: HttpClient) {
  }
  AddUpdateUser(User: any): Observable<any> {

    return this.http.post(this.url + "User", User);
  }

  GetAllUser(): Observable<any> {
    return this.http.get(this.url + "User");
  }

  DeleteUserByID(ID: any): Observable<any> {
    return this.http.delete(this.url + "User/"+ID);
  }


  GetUserByID(ID: any): Observable<any> {
    return this.http.get(this.url + "User/"+ID);
  }

}
