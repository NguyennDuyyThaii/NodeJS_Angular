import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/service/author.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  name: string;
  id: string;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      if(params['id']){
        let id = params['id'];
        this.authorService.findAuthorById(id).subscribe(author => {
          this.id = author['_id'];
          this.name = author['name'];
        })
      }
    })
  }
  editAuthor(){
    let authorData = {
      name: this.name
    }
    this.authorService.updateAuthor(this.id,authorData).subscribe(() => {
      //console.log(data);{n: 1, nModified: 0, ok: 1}
      this._flashMessagesService.show('Sửa tác gỉa thành công!', { cssClass: 'alert-success text-center', timeout: 2000 });
      this.router.navigate(["/admin/author"])
    })
  }
}
