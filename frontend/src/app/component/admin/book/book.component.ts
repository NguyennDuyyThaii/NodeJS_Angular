import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import {PageEvent} from "@angular/material/paginator";
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: any;
  totalBooks = 20;
  bookPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1,2,5,10];
  constructor(
    private bookService: BookService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
    ) { } 

    filterObject = {
      keyword: ""
    }
  ngOnInit() {
    this.bookService.getAllBooks(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.bookList = data;
    })

  }
  search(){
    this.bookService.getAllBooks(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.bookList = data;
    })
  }
  onChangedPage(dataBook: PageEvent){
    this.currentPage = dataBook.pageIndex + 1;
    this.bookPerPage = dataBook.pageSize;
    this.bookService.getAllBooks(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.bookList = data;
    })
  }

  deleteBook(bookId: string){
    let conf = confirm(`Bạn có chắc muốn xoá khỏi danh sách không?`)
    if(conf){
      this.bookService.deleteBooks(bookId).subscribe(result => {
        for(let i = 0; i< this.bookList.length; i++){
          if(this.bookList[i]._id == bookId){
            this.bookList.splice(i,1)
            this._flashMessagesService.show('Xoá sách thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
          }
        }
      })
    }
  }
}
