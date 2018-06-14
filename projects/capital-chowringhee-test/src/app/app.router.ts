import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
    ,{
        path: 'home',
        component: HomeComponent
    } 
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);