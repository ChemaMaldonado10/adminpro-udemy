import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: ' mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graficas', url: '/graficas1' },
        { titulo: 'rxjs', url: '/rxjs' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Account Settings', url: '/account-settings' },
        { titulo: 'Logout', url: '/login' },
        ]
      }
    ];
  constructor() { }
}
