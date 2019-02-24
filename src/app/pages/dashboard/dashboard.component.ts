import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/services.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  users: any = [];

  constructor(public rest: DashboardService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = [];
    this.rest.getUsers().subscribe((data: {}) => {
      console.log(data);
      this.users = data;
    });
  }
  print() {
    console.log('just clicked');
  }
}
