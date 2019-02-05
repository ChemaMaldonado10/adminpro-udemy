import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.allocateCheck();
  }

  changeColor( tema: string, link: any) {

    this.applyCheck( link );
    this._ajustes.applyTheme( tema );
  }

  applyCheck( link: any ) {

    const selectors: any = document.getElementsByClassName('selector');
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  allocateCheck() {
    const selectors: any = document.getElementsByClassName('selector');

    const tema = this._ajustes.ajustes.tema;
    for ( const ref of selectors ) {
      if ( ref.getAttribute( 'data-theme' ) === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
