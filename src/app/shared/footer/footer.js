import { Component } from 'angular2/core';
import template from './footer.html';

@Component({
	selector: 'footer',
	template: template
})
export class FooterComponent {
	constructor() {
		console.log("Footer component rendered");
	}
}