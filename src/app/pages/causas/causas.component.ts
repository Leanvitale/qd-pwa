import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-causas',
  templateUrl: './causas.component.html',
  styleUrls: ['./causas.component.css']
})
export class CausasComponent implements OnInit {

  public CAUSAS_IMG = images.causas;

  constructor() { }

  ngOnInit() {
  }

}
