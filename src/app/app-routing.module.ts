import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component from Pages
import { EventosComponent } from './pages/eventos/eventos.component';
import { CausasComponent } from './pages/causas/causas.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { Page404Component } from './pages/page404/page404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PerfilEmcnComponent } from './pages/perfil-emcn/perfil-emcn.component';

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
  { path: 'iniciar', component: IniciarSesionComponent },
  // Registrarse
  { path: 'registrar', component: RegistrarComponent },
  // Buscador
  { path: 'buscar', component: BuscadorComponent },
  // Contacto
  { path: 'contacto', component: ContactoComponent },
  // URL no encontrada
  { path: '404', component: Page404Component },
  // Perfil para Causa / Maraton / Evento / Nota / Etc
  { path: ':fundacion/:alias', component: PerfilEmcnComponent },
  // Path default
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
