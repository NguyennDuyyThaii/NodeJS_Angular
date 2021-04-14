import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-book-cate',
  templateUrl: './book-cate.component.html',
  styleUrls: ['./book-cate.component.css']
})
export class BookCateComponent implements OnInit {
  cateId: string;
  bookList: any;
  length: any;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }
   
  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.cateId = params.cateId;
        this.clientService.getCateBook(this.cateId).subscribe(data => {
          this.bookList = data
          this.length = this.bookList.length;
        })
   
    })
   
  }

}
