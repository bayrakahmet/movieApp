import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }
  routes = this.router.config.map((route: Route) => route?.path || 'Anasayfa');
  pageTitle = 'Anasayfa';
  ngOnInit(): void {
  }

  changeRoute(route: string): void {
    this.pageTitle = route;
    const pathToGo = route === 'Anasayfa' ? '/' : route;
    this.router.navigate([pathToGo]);
    }

}
