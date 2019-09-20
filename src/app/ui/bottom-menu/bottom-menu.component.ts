import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { images } from '../../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  public route = '';
  public imgHome: string;
  public imgOngs: string;
  public imgCausas: string;
  public imgEventos: string;
  public imgPerfil: string;

  constructor(private router: Router,
              private location: Location,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.setImg();
    this.route = this.location.path();
    this.getImageUrl(this.route);
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }

  setImg() {
    this.imgHome = images.unMenuHome;
    this.imgOngs =  images.unMenuOngs;
    this.imgCausas =  images.unMenuCausas;
    this.imgEventos =  images.unMenuEventos;
    this.imgPerfil =  images.unMenuPerfil;
  }

  getImageUrl(type: string) {
    switch (type) {
      case '':
        this.setImg();
        this.imgHome = (this.route === '') ? images.menuHome : images.unMenuHome;
        break;
      case '/ongs':
        this.setImg();
        this.imgOngs =  (this.route === type) ? images.menuOngs : images.unMenuOngs;
        break;
      case '/causas':
        this.setImg();
        this.imgCausas =  (this.route === type) ? images.menuCausas : images.unMenuCausas;
        break;
      case '/eventos':
        this.setImg();
        this.imgEventos =  (this.route === type) ? images.menuEventos : images.unMenuEventos;
        break;
      case '/perfil':
        this.setImg();
        this.imgPerfil =  (this.route === type) ? images.menuPerfil : images.unMenuPerfil;
        break;
    }
  }

}
