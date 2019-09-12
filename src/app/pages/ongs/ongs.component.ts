import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {

  public ONGS_IMG = images.ongs;

  constructor() { }

  ngOnInit() {
  }

}
