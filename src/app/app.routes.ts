import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authenticationGuard } from './login/authentication.guard';
import { ConsumerListComponent } from './consumer/consumer-list/consumer-list.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authenticationGuard],
    },
    {
        path: 'consumers',
        component: ConsumerListComponent,
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];
