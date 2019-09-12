import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  public url: string;
  public alias: string;
  public ruta: string;

  constructor(private toast: ToastrService) {
    this.url = 'https://quierodonar.org';
    // tslint:disable-next-line:max-line-length
    // this.url = `https://quierodonar.org${params.params.ruta}?utm_source=Compartir&utm_medium=${params.params.id_user}&utm_campaign=${params.params.alias}&utm_term=${params.params.id_ong}&utm_content=Compartir`;
  }

  ngOnInit() {
  }

  copiarLink() {
    const input = document.createElement('input');
    input.setAttribute('value', this.url);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);

    this.toast.success('Ya puedes compartirlo!', '', {
      timeOut: 3000,
      positionClass: 'toast-bottom-full-width'
    });
    // this._t.success('Ya puedes compartir el enlace por tus redes, grupos y conocidos.', 'Copiado:');
  }

}
