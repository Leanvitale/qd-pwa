import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {

  public imgOng = images.unMenuOngs;
  public imgShared = images.icShared;
  public description: string;
  public institucion: string;
  public shared: boolean;

  constructor() {
    this.shared = false;
    // tslint:disable-next-line:max-line-length
    this.description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    this.institucion = 'Sociedad Argentina de Evaluadores de la Salud';
  }

  ngOnInit() {
  }

  changeShared() {
    this.shared = !this.shared;
  }

}
