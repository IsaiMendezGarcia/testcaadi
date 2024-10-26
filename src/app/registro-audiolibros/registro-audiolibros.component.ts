import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-audiolibros',
  standalone: true,
  imports: [],
  templateUrl: './registro-audiolibros.component.html',
  styleUrl: './registro-audiolibros.component.css'
})
export class RegistroAudiolibrosComponent {

  constructor(private router: Router) {}
  regresar(){
    this.router.navigate(['/uso-material']);
  }
}
