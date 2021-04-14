import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getAllAuthors(){
    return this.http.get("http://localhost:8017/admin/author");
  }
  deleteAuthors(authorId: string){
    let url = "http://localhost:8017/admin/author/delete/" + authorId;
    return this.http.delete(url);
  }
  addAuthor(authorData){
    // lay ra cai name can lay
    let url = "http://localhost:8017/admin/author/add";
    return this.http.post(url, authorData)
  }
  findAuthorById(authorId: string){
    let url = "http://localhost:8017/admin/author/edit/" + authorId;
    return this.http.get(url)
  }
  updateAuthor(authorId: string,authorData){
    let url = "http://localhost:8017/admin/author/edit/" + authorId;
    return this.http.put(url, authorData)

  }
}
  