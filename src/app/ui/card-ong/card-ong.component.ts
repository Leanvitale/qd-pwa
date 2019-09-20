import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-card-ong',
  templateUrl: './card-ong.component.html',
  styleUrls: ['./card-ong.component.css']
})
export class CardOngComponent implements OnInit {

  public shared: boolean;
  public imgShared = images.icShared;

  constructor() { }

  ngOnInit() {
  }

  changeShared() {
    this.shared = !this.shared;
  }

}
