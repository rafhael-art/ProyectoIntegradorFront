import { RouterModule, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './empresas.component.html'

})
export default class EmpresasComponent {

}
