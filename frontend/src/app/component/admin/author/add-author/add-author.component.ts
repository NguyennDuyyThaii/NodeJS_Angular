import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author.service';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  name: string;
  constructor(
    private authorService: AuthorService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(){
    
  }
  addAuthor(){
    let authorData = {
      name: this.name
    }
    // console.log(authorData);
    this.authorService.addAuthor(authorData).subscribe(res => {
      this._flashMessagesService.show('Thêm tác gỉa thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
      this.router.navigate(['/admin/author'])
    }) 
  }
}
