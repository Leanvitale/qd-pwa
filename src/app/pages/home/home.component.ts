import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public HOME_IMG = images.home;
  public tabShow: number;

  constructor() {
    this.tabShow = 1;
  }

  ngOnInit() {
  }

}
