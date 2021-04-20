import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../../../service/category.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cateList: any;
  length: any;
  router;
  constructor(private categoryService : CategoryService,  private _flashMessagesService: FlashMessagesService) { 
  }
  

  ngOnInit(){
    this.categoryService.getAllCategories().subscribe(data => {
      this.cateList = data;
      this.length  = this.cateList.length;
    })
  }
  deleteCategory(categoryId: string){
    let conf = confirm(`Bạn có chắc muốn xoá khỏi danh sách không?`)
    if(conf){
      this.categoryService.deleteCategories(categoryId).subscribe(() => {
        for(let i = 0; i< this.cateList.length; i++){
          if(this.cateList[i]._id == categoryId){
            this.cateList.splice(i,1)
            this._flashMessagesService.show('Xoá danh mục thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
          }
        }
      })
    }
  }
}
