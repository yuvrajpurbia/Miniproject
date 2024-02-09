import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

registerForm = this.fb.group({
  fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
})

constructor(private fb: FormBuilder){ }

get fullName() {
  return this.registerForm.controls['fullName'];
}

get email() {
  return this.registerForm.controls['email'];
}

get password() {
  return this.registerForm.controls['password'];
}

get confirmPassword() {
  return this.registerForm.controls['confirmPassword'];

}

}
