import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import { ClientService } from 'src/app/service/client.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookList: any;
  totalBooks = 20;
  bookPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1,2,5,10];
  constructor(
    private clientService: ClientService
  ) { }
  filterObject = {
    keyword: ""
  }
  search(){
    this.clientService.getHome(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.bookList = data['book']
    })
  }
  ngOnInit() {
    this.clientService.getHome(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
     
      this.bookList = data['book']
  
    })
  }
  onChangedPage(dataBook: PageEvent){
    this.currentPage = dataBook.pageIndex + 1;
    this.bookPerPage = dataBook.pageSize;
    this.clientService.getHome(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.bookList = data['book'];
    })
  }
}
