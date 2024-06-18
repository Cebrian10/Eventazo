import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule si aún no lo has hecho

@Component({
    selector: 'app-promotor',
    standalone: true,
    imports: [
        CommonModule,  // CommonModule para *ngIf y otros
        RouterModule   // Importante para reconocer <router-outlet>
    ],
    templateUrl: './promotor.component.html',
    styleUrls: ['./promotor.component.scss']
})
export class PromotorComponent {
    showParentContent: boolean = false;
    showChildContent: boolean = true;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showParentContent = (event.urlAfterRedirects === '/promotor');
            }
        });
    }
}
