import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { CausasComponent } from './pages/causas/causas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeComponent } from './pages/home/home.component';
import { TopBarComponent } from './ui/top-bar/top-bar.component';
import { BottomMenuComponent } from './ui/bottom-menu/bottom-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { DonarComponent } from './pages/donar/donar.component';
import { ThxPageComponent } from './pages/thx-page/thx-page.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { CommentsCommunityComponent } from './ui/comments-community/comments-community.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CardEventComponent } from './ui/card-event/card-event.component';

import { TruncatePipe } from './tools/truncate.pipe';
import { CardOngComponent } from './ui/card-ong/card-ong.component';
import { CardOdsComponent } from './ui/card-ods/card-ods.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SharedComponent } from './ui/shared/shared.component';
import { PerfilEmcnComponent } from './pages/perfil-emcn/perfil-emcn.component';
import { LoaderComponent } from './ui/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    OngsComponent,
    CausasComponent,
    EventosComponent,
    PerfilComponent,
    RegistrarComponent,
    Page404Component,
    HomeComponent,
    TopBarComponent,
    BottomMenuComponent,
    IniciarSesionComponent,
    DonarComponent,
    ThxPageComponent,
    BuscadorComponent,
    CommentsCommunityComponent,
    FooterComponent,
    CardEventComponent,
    TruncatePipe,
    CardOngComponent,
    CardOdsComponent,
    ContactoComponent,
    SharedComponent,
    PerfilEmcnComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
