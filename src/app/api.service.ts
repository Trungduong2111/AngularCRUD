import { datamodel } from './list/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http: HttpClient) {

  }
  // addemployee
  addemployee(data: datamodel) {
    return this.Http.post<datamodel>("http://localhost:3000/posts", data);
  }

  //getemployee

  getEmployees(): Observable<datamodel[]> {
    return this.Http.get<datamodel[]>("http://localhost:3000/posts");
  }
}



