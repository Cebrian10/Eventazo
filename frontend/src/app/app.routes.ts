import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BlogComponent } from './views/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    // { path: 'home', loadChildren: () => import('./views/home/home.component').then(m => m.HomeComponent) },
    // { path: 'blog', loadChildren: () => import('./views/blog/blog.component').then(m => m.BlogComponent) },
    // { path: 'contact', loadChildren: () => import('./views/contact/contact.component').then(m => m.ContactComponent) },    
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
