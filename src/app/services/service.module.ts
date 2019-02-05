import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SidebarService, SharedService } from './services.index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService ]
})
export class ServiceModule { }
