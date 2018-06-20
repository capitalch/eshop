import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {ServiceCenterComponent} from './service-center/service-center.component';

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
    ,{   
        path: 'products', 
        component: ProductsComponent
    }
    ,{   
        path: 'contact', 
        component: ContactComponent
    }
    ,{   
        path: 'service', 
        component: ServiceCenterComponent
    }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });