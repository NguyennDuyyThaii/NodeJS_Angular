import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn:"root"
})
export class CategoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
  getAllCategories(){
    return this.http.get("http://localhost:8017/admin/category");
  }
  deleteCategories(categoryId: string){
    let url = "http://localhost:8017/admin/category/delete/" + categoryId;
    return this.http.delete(url);
  }
  addCategory(categoryData){
    // lay ra cai name can lay
    let url = "http://localhost:8017/admin/category/add";
    return this.http.post(url, categoryData)
  }
  findCategoryById(categoryId: string){
    let url = "http://localhost:8017/admin/category/edit/" + categoryId;
    return this.http.get(url)
  }
  updateAuthor(categoryId: string,categoryData){
    let url = "http://localhost:8017/admin/category/edit/" + categoryId;
    return this.http.put(url, categoryData)
  }
}
