import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { CausasComponent } from './pages/causas/causas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
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
import { PerfilOngComponent } from './pages/perfil-ong/perfil-ong.component';
import { LastNotesComponent } from './ui/last-notes/last-notes.component';
import { CardNoteComponent } from './ui/card-note/card-note.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


@NgModule({
  declarations: [
    AppComponent,
    OngsComponent,
    CausasComponent,
    EventosComponent,
    PerfilComponent,
    RegistrarComponent,
    PageErrorComponent,
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
    LoaderComponent,
    PerfilOngComponent,
    LastNotesComponent,
    CardNoteComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'qd-pwa'),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
