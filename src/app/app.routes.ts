import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroAudiolibrosComponent } from './registro-audiolibros/registro-audiolibros.component';
import { RegristroLibrosComponent } from './regristro-libros/regristro-libros.component';
import { UsoMaterialComponent } from './uso-material/uso-material.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta por defecto
    { path: 'home', component: HomeComponent }, // Ruta para la página principal
    { path: 'registro-audiolibros', component: RegistroAudiolibrosComponent }, // Ruta para registro de audiolibros
    { path: 'registro-libros', component: RegristroLibrosComponent }, // Ruta para registro de libros
    { path: 'uso-material', component: UsoMaterialComponent }, // Ruta para uso de materiales
    { path: '**', redirectTo: 'home' } // Redirigir cualquier otra ruta a 'home'
];

