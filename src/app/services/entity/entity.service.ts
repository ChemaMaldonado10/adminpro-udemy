import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Entity } from '../../models/entity.model';
import { HeaderComponent } from '../../shared/header/header.component';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  httpClient: any;
  entity: Entity;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
  }

  estalogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }
  // guardarStorage( id: string, token: string, entity: Entity ) {
  //   localStorage.setItem('id_entidad', id );
  //   localStorage.setItem('token',  token );
  //   localStorage.setItem('entity', JSON.stringify( entity ));

  //   this.entity = entity;
  //   this.token = token;
  // }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
    this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  loginGoogle( token ) {
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/login/google/';
    return this.http.post( url, {token} ).pipe(
      map( (resp: any) => {
        console.log(resp);
        localStorage.setItem('id_entidad', resp.usuario[0]['id_entidad']);
        localStorage.setItem('token', resp.token );
        localStorage.setItem('entity', JSON.stringify(resp.usuario[0]));
        return true;
      }));
  }

  login ( entity: Entity, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', entity.email_entidad);
    } else {
      localStorage.removeItem('email');
    }
    // tslint:disable-next-line:prefer-const
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, entity).pipe(
              map( (resp: any) => {
                console.log(resp);
                localStorage.setItem('id_entidad', resp.message[0]['id_entidad']);
                localStorage.setItem('token', resp.token );
                localStorage.setItem('entity', JSON.stringify(resp.message[0]));
                return true;
              }));
  }

  crearUsuario( entity ) {

    console.log(entity);
    const url = URL_SERVICIOS + '/entity/create_raw';
    return this.http.post(url, entity );
  }
}
