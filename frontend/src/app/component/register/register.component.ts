import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUser: FormGroup;

  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { 
    this.addUser = this.createForm()
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
  ngOnInit(){
  }

  get f(){
    return this.addUser.controls;
  }
  submit(event){
    event.preventDefault();
    const formData = new FormData();
    let userData = {
      email: this.addUser.value.email,
      password: this.addUser.value.password
    }
    formData.append("email", this.addUser.value.email)
    formData.append("password", this.addUser.value.password)
    this.userService.addUser(userData).subscribe(data => {
      this.router.navigate(["/login"])
    })
  }
  
}
