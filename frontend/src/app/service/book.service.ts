import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getAllBooks(bookPerPage: number, currentPage:number, name: any){
    let queryParams = `?pagesize=${bookPerPage}&page=${currentPage}&keyword=${name.keyword}`
    return this.http.get('http://localhost:8017/admin/book' + queryParams);
  }
  deleteBooks(bookId: string){
    let url = "http://localhost:8017/admin/book/delete/" + bookId;
    return this.http.delete(url);
  }
  getAllAuthors(){
    return this.http.get("http://localhost:8017/admin/author");
  }
  getAllCategories(){
    return this.http.get("http://localhost:8017/admin/category");
  }
  findBookById(bookId: string){
    let url = "http://localhost:8017/admin/book/edit/" + bookId;
    return this.http.get(url)
  }
  addBook(bookData){
    // lay ra cai name can lay
    let url = "http://localhost:8017/admin/book/add";
    return this.http.post(url, bookData)
  }
  updateBook(bookId: string,bookData){
    let url = "http://localhost:8017/admin/book/edit/" + bookId;
    return this.http.put(url, bookData)

  }
}

