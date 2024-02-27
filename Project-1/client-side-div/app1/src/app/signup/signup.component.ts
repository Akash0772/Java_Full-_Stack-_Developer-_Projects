import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
  }
  save() {
    this.httpClient.post('http://localhost:9090/person/signup', this.signupForm.value).subscribe(
      results => {
        console.log(results);
      }
    );
  }
}
