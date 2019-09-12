import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-ods',
  templateUrl: './card-ods.component.html',
  styleUrls: ['./card-ods.component.css']
})
export class CardOdsComponent implements OnInit {

  @Input() listOds: any;
  public position: number;
  public count: number;

  constructor() {
    this.position = 1;
  }

  ngOnInit() {
  }

  nextOds() {

  }

}
