import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Constants } from './app-constants';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: '', redirectTo: Constants.routeDashboard, pathMatch: 'full' },
    { path: Constants.routeDashboard, component: DashboardComponent },
    { path: Constants.routeLogin, component: LoginComponent },
    { path: Constants.routeCart, component: CartComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
