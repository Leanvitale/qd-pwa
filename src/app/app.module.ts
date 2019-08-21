import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { CausasComponent } from './pages/causas/causas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './ui/top-bar/top-bar.component';
import { BottomMenuComponent } from './ui/bottom-menu/bottom-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OngsComponent,
    CausasComponent,
    EventosComponent,
    PerfilComponent,
    IniciarComponent,
    RegistrarComponent,
    Page404Component,
    HomeComponent,
    TopBarComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
