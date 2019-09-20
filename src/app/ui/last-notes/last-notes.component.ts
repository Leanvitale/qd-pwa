import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-last-notes',
  templateUrl: './last-notes.component.html',
  styleUrls: ['./last-notes.component.css']
})
export class LastNotesComponent implements OnInit {

  public notes: Array<any>;

  constructor() {
    this.initNotes();
  }

  ngOnInit() {
  }


  initNotes() {
    this.notes = new Array<any>();

    this.notes.push(
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/kindapp-5fc79.appspot.com/o/fundacion_img%2FonWu6kgH00bxniAvmFhQfnXNgy63_portadajpeg?alt=media&token=83a040de-fb21-428f-bb75-b1e1fa47f48d',
        name: 'Que es una campaña de Email-Marketing?',
        author: 'Tania Yacante',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        date: '21/09/2019'
      });

    this.notes.push(
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/kindapp-5fc79.appspot.com/o/fundacion_img%2FonWu6kgH00bxniAvmFhQfnXNgy63_portadajpeg?alt=media&token=83a040de-fb21-428f-bb75-b1e1fa47f48d',
          name: 'Que es una campaña de Email-Marketing?',
          author: 'Tania Yacante',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          date: '21/09/2019'
      });

    this.notes.push(
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/kindapp-5fc79.appspot.com/o/fundacion_img%2FonWu6kgH00bxniAvmFhQfnXNgy63_portadajpeg?alt=media&token=83a040de-fb21-428f-bb75-b1e1fa47f48d',
          name: 'Que es una campaña de Email-Marketing?',
          author: 'Tania Yacante',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          date: '21/09/2019'
      });

    this.notes.push(
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/kindapp-5fc79.appspot.com/o/fundacion_img%2FonWu6kgH00bxniAvmFhQfnXNgy63_portadajpeg?alt=media&token=83a040de-fb21-428f-bb75-b1e1fa47f48d',
          name: 'Que es una campaña de Email-Marketing?',
          author: 'Tania Yacante',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          date: '21/09/2019'
      });
  }

}
