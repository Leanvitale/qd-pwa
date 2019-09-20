import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public HOME_IMG = images.home;
  public FAQS_IMG = images.faqs;
  public tabShow: number;

  constructor(private router: Router) {
    this.tabShow = 1;
  }

  ngOnInit() {
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
