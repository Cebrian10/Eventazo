import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormStateService } from '../../../../../services/form-state.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  form: FormGroup;

  constructor(private formStateService: FormStateService, private fb: FormBuilder) {
    this.form = this.fb.group({
      seatpriceplatino: '',
      seatpricegold: '',
      seatpricesilver: '',
      seatquantityplatino: '',
      seatquantitygold: '',
      seatquantitysilver: ''
    });
  }

  ngOnInit(): void {
    const data = this.formStateService.getFormData('step2');
    this.form.patchValue(data);
  }

  onNext() {
    this.formStateService.setFormData('step2', this.form.value);
    this.next.emit();
  }

  onPrevious() {
    this.formStateService.setFormData('step2', this.form.value);
    this.previous.emit();
  }
}
