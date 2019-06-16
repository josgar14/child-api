import { ChildComponent } from './child/child.component';
import { Component, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
	@ViewChild('child1', { static: true })
	firstChild: ChildComponent;

	@ViewChild('child2', { static: true })
	secondChild: ChildComponent;

	@ViewChildren(ChildComponent) allChildren: QueryList<ChildComponent>;

	ngAfterViewInit() {
		console.log('-----------------------------------');
		console.log("*Here we're greeting both child and we're using the ngAfterviewInit() life cycle hook");
		this.firstChild.greet();
		console.log(this.firstChild);
		this.secondChild.greet();
		console.log(this.secondChild);
		console.log('-----------------------------------');
	}

	greetAllChildren() {
		this.allChildren.forEach((child) => child.greet());
		console.log(this.allChildren);
	}
}
