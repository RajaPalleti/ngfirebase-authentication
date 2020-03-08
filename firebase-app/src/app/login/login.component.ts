import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: any = false;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    gender: ['', Validators.required],
    vehicles: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder) {
  }
  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls;
    console.log('this.loginForm.controls', this.loginForm.controls);
  }
  onSubmit() {
    console.log('loginForm', this.loginForm);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log('loginForm2', this.loginForm);
    console.log('loginFormValid', this.loginForm.valid);
    // if (formData.firstName === 'username' && formData.lastName === 'password') {
    //   this.router.navigate(['dashboard']);
    // }
  }
}
