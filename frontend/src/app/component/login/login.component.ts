import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  private token: string;
  email: string;
  password: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.userLogin = this.createForm()
  }
  createForm(){
    return new FormGroup({
      email: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
  }
  get f(){
    return this.userLogin.controls
  }
  ngOnInit(): void {
  }
  
  onLogin(event){
    event.preventDefault();
    let userData = {
      email: this.userLogin.value.email,
      password: this.userLogin.value.password
    }
    this.userService.login(userData)
  }
}
 