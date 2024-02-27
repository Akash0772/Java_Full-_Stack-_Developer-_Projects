import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login(){
    this.httpClient.post('http://localhost:9090/person/login', this.loginForm.value).subscribe(
    results => {
      console.log(results);
    }
  )
  }

}
