import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignupLoginService } from '../signup-login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: SignupLoginService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }
  save() {
    this.service.save(this.signupForm).subscribe(
      results => {
        console.log(results);

        if(results){
          // navigate to login
          this.router.navigate(['login']);
        }
      }
    )
  }
}
