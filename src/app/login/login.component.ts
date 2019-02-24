import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EntityService } from '../services/services.index';
import { Entity } from '../models/entity.model';

declare function init_plugins();
declare const gapi: any;

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;
  auth2: any;

  constructor(public router: Router, public _entityService: EntityService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '35460250-iebise2vkj27up2lva6j7suarl7akfk3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
        this.attachSignIn( document.getElementById('btnGoogle') );
    });
  }

  attachSignIn( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      // tslint:disable-next-line:prefer-const
      let token = googleUser.getAuthResponse().id_token;
      this._entityService.loginGoogle( token )
              .subscribe( () => window.location.href = '/#dashboard' );
    });
  }


  ingresar( forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }
    // tslint:disable-next-line:prefer-const
    let entity =  new Entity(null, null, null, forma.value.email, forma.value.password, null, null);

    this._entityService.login( entity, forma.value.recuerdame)
            .subscribe( correcto => this.router.navigate(['/dashboard']) );
  }
}
