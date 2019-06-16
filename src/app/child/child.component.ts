import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.css' ]
})
export class ChildComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	@Input() name: string;

	greet() {
		console.log(`Hello from ${this.name}`);
	}
}
