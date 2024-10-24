import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación

bootstrapApplication(AppComponent, appConfig) // Inicia la aplicación con la configuración y el componente raíz
  .catch((err) => console.error(err)); // Manejo de errores
