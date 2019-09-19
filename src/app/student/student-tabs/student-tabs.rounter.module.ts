import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { StudentTabsPage } from './student-tabs.page';

const routes: Routes = [
    {
        path: '',
        component: StudentTabsPage,
        children: [ 
            { path: 'view-event', loadChildren: 'src/app/student/view-event/view-event.module#ViewEventPageModule' },
            { path: 'view-calendar', loadChildren: 'src/app/student/view-calendar/view-calendar.module#ViewCalendarPageModule' }]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentTabsRoutingModule { }