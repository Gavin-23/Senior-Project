import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-student-tabs',
	templateUrl: './student-tabs.page.html',
	styleUrls: ['./student-tabs.page.scss'],
})
export class StudentTabsPage implements OnInit {

	@ViewChild('StudentTabs') tabs: IonTabs

	constructor() { }

	ngOnInit() {
		console.log(this.tabs);
		this.tabs.select("view-event")
	}
}