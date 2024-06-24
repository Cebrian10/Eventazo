import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormStateService } from '../../../../../services/form-state.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Output() next = new EventEmitter<void>();
  form: FormGroup;
  imageUrl: string = '';

  constructor(private formStateService: FormStateService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      place: '',
      startdate: '',
      enddate: '',
      details: '',
      image: ''
    });
  }

  ngOnInit(): void {
    const data = this.formStateService.getFormData('step1');
    this.form.patchValue(data);
    this.imageUrl = this.formStateService.getImage('step1');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        this.formStateService.setImage('step1', this.imageUrl);
        // También guardar la URL en el formulario
        this.form.get('image')?.setValue(this.imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  onNext() {
    this.formStateService.setFormData('step1', this.form.value);
    this.next.emit();
  }
}
