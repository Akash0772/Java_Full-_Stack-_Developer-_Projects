import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { SignupLoginService } from '../signup-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: SignupLoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login(){
    this.service.login(this.loginForm).subscribe(
    results => {
      console.log(results);

      if(results){
        // navigate to dashboard
        this.router.navigate(['dashboard'])
      }
    }
  )
  }

}
