import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regristro-libros',
  standalone: true,
  imports: [],
  templateUrl: './regristro-libros.component.html',
  styleUrl: './regristro-libros.component.css'
})
export class RegristroLibrosComponent {

    constructor(private router: Router) {}
    regresar(){
      this.router.navigate(['/uso-material']);
    }

}
