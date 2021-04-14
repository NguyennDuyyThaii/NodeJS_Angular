import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  name: string;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(){
  }
  addCategory(){
    let authorData = {
      name: this.name
    }
    // console.log(authorData);
    this.categoryService.addCategory(authorData).subscribe(res => {
      this._flashMessagesService.show('Thêm danh mục thành công!', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(['/admin/category'])
    })
  }

}
