import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  name: string;
  id: string;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService
  ) { }

 
  ngOnInit(){
    this.route.params.subscribe(params =>{
      if(params['id']){
        let id = params['id'];
        this.categoryService.findCategoryById(id).subscribe(cate => {
          this.id = cate['_id'];
          this.name = cate['name'];
        })
      }
    })
  }
  editCategory(){
    let categoryData = {
      name: this.name
    }
    this.categoryService.updateAuthor(this.id,categoryData).subscribe(() => {
      this._flashMessagesService.show('Sửa danh mục thành công!', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(["/admin/category"])
    })
  }

}
