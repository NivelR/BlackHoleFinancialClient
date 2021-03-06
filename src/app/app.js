import { Component } from 'angular2/core';
import { RouteConfig } from 'angular2/router';
import template from './app.html';
import { MenuComponent } from './shared/menu/menu';
import { FooterComponent } from './shared/footer/footer';
import { LoggedInRouterOutlet } from './plugins/router';
import { router } from './router';

@Component({
  selector: 'my-app',
  directives: [MenuComponent, LoggedInRouterOutlet, FooterComponent],
  template: template
})
@RouteConfig(router.config)
export class AppComponent { }
