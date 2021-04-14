import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  private token: string;
  private authStatusListener = new Subject<boolean>()
  constructor(private http: HttpClient) { }

  addUser(userData){
    let url = "http://localhost:8017/register";
    return this.http.post(url, userData)
  }
  getToken(){
    return this.token;
  }
  getAuthStatusListener(){
    return this.authStatusListener.asObservable()
  }
  login(userData){
    let url = "http://localhost:8017/login";
    return this.http.post<{token: string}>(url, userData).subscribe(data => {
      let token = data.token
      this.token = token
      this.authStatusListener.next(true)
    })
  }
}
