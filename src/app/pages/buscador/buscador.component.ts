import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public BUSCAR_IMG = images.buscar;

  constructor() { }

  ngOnInit() {
  }

}
