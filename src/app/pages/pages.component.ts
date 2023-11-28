import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pages.component.html'
})
export default class PagesComponent {

  private _auth$ = inject(AuthService)

  isLogged(): boolean {
    return this._auth$.isLogged();
  }
}
