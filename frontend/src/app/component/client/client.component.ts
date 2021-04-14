import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  cateList: any;
  bookPerPage = 3;
  currentPage = 1;
  constructor(
 private clientService: ClientService
  ) { }
  filterObject = {
    keyword: ""
  }
 
  ngOnInit(){
    this.clientService.getHome(this.bookPerPage,this.currentPage, this.filterObject).subscribe(data => {
      this.cateList = data['category']
    })
  }

}
