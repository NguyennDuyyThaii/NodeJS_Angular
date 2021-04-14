import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: any;
  sameBook: any
  id: string;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this.clientService.getDetail(this.id).subscribe(data => {
        this.book = data['detail']
        this.sameBook = data['book']
      })
    })
  }

}
