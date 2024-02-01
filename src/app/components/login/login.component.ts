import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../model/credentials';
import { BackendService } from '../../services/backend/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials!: Credentials 
  loginform: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('',Validators.required)
 })
 
 constructor(private fb: FormBuilder, private fg: BackendService) {}

 get email() {
  return this.loginform.controls['email'];
 }
 get password() { return this.loginform.controls['password']}

 loginmethod() { 
  this.credentials= new Credentials();
  this.credentials.username=this.loginform.get('email')?.value;
  this.credentials.password=this.loginform.get('password')?.value;
  this.fg.login(this.credentials) 
}
}