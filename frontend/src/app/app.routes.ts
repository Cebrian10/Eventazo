import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { FaqComponent } from './views/faq/faq.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faq', component: FaqComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];