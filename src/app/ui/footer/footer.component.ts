import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public logo = images.logoNegativo;

  constructor() { }

  ngOnInit() {
  }

}
