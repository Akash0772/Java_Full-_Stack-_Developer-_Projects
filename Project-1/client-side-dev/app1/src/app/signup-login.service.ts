import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private httpClient: HttpClient) { }

  save(signupForm: FormGroup) {
    return this.httpClient.post('http://localhost:9090/person/signup', signupForm.value);
  }

  login(loginForm: FormGroup){
    return this.httpClient.post('http://localhost:9090/person/login', loginForm.value);
  }
}
