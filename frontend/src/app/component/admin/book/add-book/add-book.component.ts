import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  imagePreview: string;

  name: string;
  price: string;
  avatar: string;
  author_id: string;
  cate_id: string;
  des_short: string;
  des_detail: string;
  authorList: any;
  categoryList: any;
  editor: any;

  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private _flashMessagesService: FlashMessagesService
    
  ) {
    this.addBookForm = this.createForm()
   }
   config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
   createForm(){
     return new FormGroup({
       name: new FormControl('',[
         Validators.required,
         Validators.minLength(5)
       ]),
       des_short: new FormControl('',[
         Validators.required,
         Validators.minLength(20)
       ]),
       des_detail: new FormControl('',[
        Validators.required,
        Validators.minLength(50)
      ]),
      avatar: new FormControl('', [
        Validators.required
      ]),
      author_id: new FormControl('',[
        Validators.required
      ]),
      cate_id: new FormControl('',[
        Validators.required
      ]),
      price: new FormControl('',[
        Validators.required
      ])
     })
   }
  ngOnInit(){
    this.authorService.getAllAuthors().subscribe(data => {
      this.authorList = data
    })
    this.categoryService.getAllCategories().subscribe(data => {
      this.categoryList = data
    })
  }
  get f(){
    return this.addBookForm.controls;
  }

  onImage(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imagePreview = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0])
      this.avatar = event.target.files[0]
    }
  }
  submitForm(event){ 
    event.preventDefault();
    const formData = new FormData();
    formData.append("price", this.addBookForm.value.price)
    formData.append("name", this.addBookForm.value.name)
    formData.append("author_id", this.addBookForm.value.author_id.match(/^[0-9a-fA-F]{24}$/))
    formData.append("cate_id", this.addBookForm.value.cate_id.match(/^[0-9a-fA-F]{24}$/))
    formData.append("des_short", this.addBookForm.value.des_short)
    formData.append("des_detail", this.addBookForm.value.des_detail)
    formData.append("avatar", this.avatar)
    this.bookService.addBook(formData).subscribe(data => {
      this._flashMessagesService.show('Thêm sách thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
      this.router.navigate(["/admin/book"])
    })
  }
}
