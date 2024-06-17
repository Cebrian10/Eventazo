import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-eventdetail',
  standalone: true,
  imports: [],
  templateUrl: './eventdetail.component.html',
  styleUrl: './eventdetail.component.scss'
})
export class EventdetailComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);

  ID: string | null | undefined;
  event: [] = [];

  ngOnInit(): void {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.postEventoId('evento/' + this.ID)
      .subscribe(response => {
        this.event = response.result[0];
        console.log(this.event);
      });
  }
}
