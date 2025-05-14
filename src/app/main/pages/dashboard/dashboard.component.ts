import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public contentHeader: object
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Dashboards',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Dashboards',
            isLink: true,
            link: '/'
          },
          {
            name: 'Dashboards',
            isLink: false
          }
        ]
      }
    }
  }

}
