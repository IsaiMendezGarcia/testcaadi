import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uso-material',
  standalone: true,
  imports: [],
  templateUrl: './uso-material.component.html',
  styleUrl: './uso-material.component.css'
})

export class UsoMaterialComponent {
  constructor(private router: Router) {}
  registrarMaterial() {
    this.router.navigate(['/registro-libros']);
  }
  registrarAudioLibro() {
    this.router.navigate(['/registro-audiolibros']);
  }
  regresar(){
    this.router.navigate(['/home']);
  }
}
