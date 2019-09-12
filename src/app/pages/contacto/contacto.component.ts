import { Component, OnInit } from '@angular/core';
import { images } from '../../../environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public imgContacto = images.contacto;
  public formContact: FormGroup;

  constructor(private router: Router) {
    this.formContact = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }

  enviar() {
    console.log('Enviar Mensaje');
  }

}
