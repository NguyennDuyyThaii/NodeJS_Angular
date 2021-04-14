import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookId;
  id: string;
  editBookForm: FormGroup;
  imagePreview: string;
  name: string;
  price: number;
  avatar: string;
  author_id: string;
  cate_id: string;
  des_short: string;
  des_detail: string;
  authorList: any;
  categoryList: any;

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
  constructor(
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    private _flashMessagesService: FlashMessagesService
  ) {
    this.editBookForm = this.editForm()
   }
   editForm(){
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
  ngOnInit(){
    this.route.params.subscribe(params => {
      if(params['id']){
        let id = params['id'];
        this.bookService.findBookById(id).subscribe(book => {
          // this.editBookForm.value.name = book['name']
          this.imagePreview = book['avatar']
          this.id = book['id']
          // this.editBookForm.value.price = book['price']
          // this.editBookForm.value.des_short = book['des_short']
          // this.editBookForm.value.des_detail = book['des_detail']
          // this.editBookForm.value.author_id = book['author_id']
          // this.editBookForm.value.cate_id = book['cate_id']
          // this.imagePreview  = book['avatar']
          this.editBookForm.setValue({
            name: book['name'],
            des_detail: book['des_detail'],
            des_short: book['des_short'],
            price: book['price'],
            author_id: book['author_id'],
            cate_id: book['cate_id'],
            avatar: book['avatar']
          })
          
        })
      }
    })
    this.authorService.getAllAuthors().subscribe(data => {
      this.authorList = data
    })
    this.categoryService.getAllCategories().subscribe(data => {
      this.categoryList = data
    })
  }
  get f(){
    return this.editBookForm.controls;
  }
  submitForm(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", this.editBookForm.value.id)
    formData.append("price", this.editBookForm.value.price)
    formData.append("name", this.editBookForm.value.name)
    formData.append("author_id", this.editBookForm.value.author_id.match(/^[0-9a-fA-F]{24}$/))
    formData.append("cate_id", this.editBookForm.value.cate_id.match(/^[0-9a-fA-F]{24}$/))
    formData.append("des_short", this.editBookForm.value.des_short)
    formData.append("des_detail", this.editBookForm.value.des_detail)
    formData.append("avatar", this.avatar)
    this.bookService.updateBook(this.id,formData).subscribe(data => {
        // console.log(data)
        this._flashMessagesService.show('Sửa sách thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
      this.router.navigate(["/admin/book"])
    })
  }
}

