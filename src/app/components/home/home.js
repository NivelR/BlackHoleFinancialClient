import {Component} from 'angular2/core';
import template from './home.html';

@Component({
	selector: 'home',
	template: template
})
export class HomeComponent {
	constructor() {
		console.log("Home component rendered");
	}
}