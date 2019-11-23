import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
var routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'student-login', loadChildren: './student-login/student-login.module#StudentLoginPageModule' },
    { path: 'staff-login', loadChildren: './staff-login/staff-login.module#StaffLoginPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'student-tabs', loadChildren: './student/student-tabs/student-tabs.module#StudentTabsPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    {
        path: 'sign-in',
        canActivate: [RedirectComponent],
        component: RedirectComponent,
        data: {
            externalUrl: 'https://oauth.cmu.ac.th/v1/Authorize.aspx?response_type=code&client_id=J07vZjjb55qryMp3V6fSYuxs7KhwctgsD1RZzGXp&redirect_uri=http://localhost:8100&scope=cmuitaccount.basicinfo&state=xyz.aspx'
            // externalUrl: https://oauth.cmu.ac.th/v1/Authorize.aspx?response_type=code&client_id=${'gQJfMeuvJCUDnZaxEvw8Qu2cKK3cuxx8BqTmBpDf'}&redirect_uri=${'http://scott.dto.technology'}&scope=cmuitaccount.basicinfo&state=xyz
        }
    },
    {
        path: '',
        canActivate: [RedirectComponent],
        component: RedirectComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map