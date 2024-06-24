import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formData: any = {};
  private formDataSubject = new BehaviorSubject<any>({});
  formData$ = this.formDataSubject.asObservable();

  setFormData(step: string, data: any) {
    this.formData[step] = data;
    this.formDataSubject.next(this.getCombinedFormData());
  }

  getFormData(step: string): any {
    return this.formData[step] || {};
  }

  setImage(step: string, image: string) {
    if (!this.formData[step]) {
      this.formData[step] = {};
    }
    this.formData[step].image = image;
    this.formDataSubject.next(this.getCombinedFormData());
  }

  getImage(step: string): string {
    return this.formData[step]?.image || '';
  }

  private getCombinedFormData() {
    return {
      ...this.formData['step1'],
      ...this.formData['step2']
    };
  }
}
