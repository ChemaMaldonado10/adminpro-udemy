import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EntityService } from '../entity/entity.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( public _entityService: EntityService, public router: Router ) {}

  canActivate() {

    if ( this._entityService.estalogueado() ) {
      console.log( 'Paso el guard' );
      return true;
    } else {
      console.log( 'Bloqueado por el guard' );
      this.router.navigate(['/login']);
      return false;
    }
  }
}
