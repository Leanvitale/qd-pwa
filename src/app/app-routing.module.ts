import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component from Pages
import { EventosComponent } from './pages/eventos/eventos.component';
import { CausasComponent } from './pages/causas/causas.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { Page404Component } from './pages/page404/page404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // Home QD
  { path: '', component: HomeComponent },
  // Home Instituciones
  { path: 'ongs', component: OngsComponent },
  // Home Causas
  { path: 'causas', component: CausasComponent },
  // Home Eventos
  { path: 'eventos', component: EventosComponent },
  // Home Perfil Donante
  { path: 'perfil', component: PerfilComponent },
  // Iniciar sesion
  { path: 'iniciar', component: IniciarComponent },
  // Registrarse
  { path: 'registrar', component: RegistrarComponent },
  // URL no encontrada
  { path: '404', component: Page404Component },
  // Path default
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
