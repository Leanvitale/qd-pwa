import { Component, OnInit, Input } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.css']
})
export class CardNoteComponent implements OnInit {

  @Input() note: any;

  public shared: boolean;
  public imgShared = images.icShared;

  constructor() { }

  ngOnInit() {
  }

  changeShared() {
    this.shared = !this.shared;
  }

}
