import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/services.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public _entityService: EntityService) { }

  ngOnInit() {
  }

}
