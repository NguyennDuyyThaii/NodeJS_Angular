import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getHome(bookPerPage: number, currentPage:number, name: any){
    let x = `?pagesize=${bookPerPage}&page=${currentPage}&keyword=${name.keyword}`
    return this.http.get("http://localhost:8017" + x)
  }

  getCateBook(cateId: string){
    return this.http.get("http://localhost:8017/category/" + cateId)
  }

  getDetail(bookId: string){
    return this.http.get("http://localhost:8017/detail/" + bookId)
  }
}
