import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';

@Component({
  selector: 'app-comments-community',
  templateUrl: './comments-community.component.html',
  styleUrls: ['./comments-community.component.css']
})
export class CommentsCommunityComponent implements OnInit {

  public comments: Array<any>;
  public bgComment = images.bgComments;

  constructor() {
    this.initComments();
  }

  ngOnInit() {
  }

  initComments() {
    this.comments = new Array<any>();

    this.comments.push(
      {
        img: 'https://i.imgur.com/0AVYUmS.png',
        name: 'Leandro Vitale',
        location: 'Mendoza - Argentina',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
        position: 'Fundador de KindApp'
      });

    this.comments.push(
        {
          img: 'https://i.imgur.com/p37UU7m.png',
          name: 'Tania Yacante',
          location: 'Mendoza - Argentina',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          position: 'CMO de KindApp'
      });

    this.comments.push(
        {
          img: 'https://i.imgur.com/O5QOkON.png',
          name: 'Luis Guzzo',
          location: 'Mendoza - Argentina',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          position: 'UX Expert de KindApp'
      });

    this.comments.push(
        {
          img: 'https://i.imgur.com/KulDa2m.png',
          name: 'Martin Odetti',
          location: 'Mendoza - Argentina',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.`,
          position: 'Back-end de KindApp'
      });
  }

}
