import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export default class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  public loginForm: any = this.fb.group({
    correo: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  login() {
    this.authService.Login(this.loginForm.value)
      .subscribe(
        resp => {
          debugger
          if (resp.isSucces) {
            this.router.navigateByUrl('/welcome');
          } else {
            Swal.fire('Error', resp.message, 'error');
          }

        }, (err) => {
          console.log(err)
        }
      );


  }
}
