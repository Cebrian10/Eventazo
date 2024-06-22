import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      appointmentDateTime: ['']
    });
  }

  ngOnInit(): void {
    this.appointmentForm.patchValue({
      appointmentDateTime: new Date().toISOString().substring(0, 16)
    });
  }

  onSubmit() {
    console.log('Fecha y hora seleccionadas:', this.appointmentForm.value.appointmentDateTime);
  }
}
