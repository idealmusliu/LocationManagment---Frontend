import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordType = 'password';
  loginForm: FormGroup;
  formError = false;
  message: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  togglePassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  register() {
    if (this.loginForm.valid) {
      this.auth.register(this.loginForm.value).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/locations');
      }, error => {
        this.message = 'Email or password is incorrect.';
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      });
    } else {
      this.formError = true;
    }
  }
}
