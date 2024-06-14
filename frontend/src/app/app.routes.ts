import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { ContactComponent } from './views/contact/contact.component';
import { FaqComponent } from './views/faq/faq.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { BuyComponent } from './views/buy/buy.component';

import { Step1Component } from './views/steps/step1/step1.component';
import { Step2Component } from './views/steps/step2/step2.component';
import { Step3Component } from './views/steps/step3/step3.component';
import { Step4Component } from './views/steps/step4/step4.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'news', component: NewsComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'step1', component: Step1Component },
    { path: 'step2', component: Step2Component },
    { path: 'step3', component: Step3Component },
    { path: 'step4', component: Step4Component },
    
    { path: '**', redirectTo: '', pathMatch: 'full' }
];