import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public LOGO_IMG = images.logo;
  public buscador: boolean;

  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.buscador = this.location.path() === '/buscar';
    this.router.events.subscribe((val) => {
      this.buscador = this.location.path() === '/buscar';
    });
  }

  goSearch() {
    const ruta = this.buscador ? '' : '/buscar';
    this.router.navigate([ruta]);
  }

}
