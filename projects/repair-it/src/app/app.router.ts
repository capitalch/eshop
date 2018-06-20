import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {SelectionComponent} from './selection/selection.component';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {RepairComponent} from './repair/repair.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'selection',
        pathMatch: 'full'
    }
    ,{
        path: 'selection',
        component: SelectionComponent
    } 
    ,{   
        path: 'home', 
        component: HomeComponent
    }
    ,{
        path: 'gallery', 
        component: GalleryComponent
    }
    ,{
        path: 'contact', 
        component: ContactComponent
    }
    ,{
        path: 'repair', 
        component: RepairComponent
    }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });