import { Component, OnInit } from '@angular/core';
import {AuthorService} from './../../../service/author.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorList: any;
  length: any;
  constructor(
    private authorService: AuthorService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit(){
    this.authorService.getAllAuthors().subscribe(data => {
      this.authorList = data;
      this.length = this.authorList.length;
    })
  }
  deleteAuthor(authorId: string){
    let conf = confirm(`Bạn có chắc muốn xoá khỏi danh sách không?`)
    if(conf){
      this.authorService.deleteAuthors(authorId).subscribe(result => {
        for(let i = 0; i< this.authorList.length; i++){
          if(this.authorList[i]._id == authorId){
            this.authorList.splice(i,1)
            this._flashMessagesService.show('Xoá tác gỉa thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
          }
        }
      })
    }
  }
}
