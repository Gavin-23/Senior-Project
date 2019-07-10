import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [ 
            { path: 'create-event', loadChildren: '../create-event/create-event.module#CreateEventPageModule' },
            { path: 'event-list', loadChildren: '../event-list/event-list.module#EventListPageModule' }
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule { }