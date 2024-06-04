// src/app/app-routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
